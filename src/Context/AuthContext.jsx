import { createContext, useContext, useState, useEffect } from 'react';
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
   setPersistence,
   browserLocalPersistence,
} from 'firebase/auth';
import { auth, db } from '../firebase/FirebaseConfig.';
import { doc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });
      return unsubscribe;
   }, []);

   const signUp = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
         setDoc(doc(db, 'users', email), {
            email: email,
            password: password,
            savedShows: [],
         });
         return userCredential;
      });
   };

   const signIn = (email, password) => {
      return setPersistence(auth, browserLocalPersistence).then(() => {
         return signInWithEmailAndPassword(auth, email, password);
      });
   };

   const logOut = () => {
      return signOut(auth);
   };

   return (
      <AuthContext.Provider value={{ signUp, user, signIn, logOut, loading }}>
         {children}
      </AuthContext.Provider>
   );
}

export function UserAuth() {
   return useContext(AuthContext);
}
