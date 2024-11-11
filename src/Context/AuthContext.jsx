import { createContext, useContext, useState, useEffect } from 'react';
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
} from 'firebase/auth';
import { auth, db } from '../firebase/FirebaseConfig.';

import { doc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
   const [user, setUser] = useState(null);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
      });
      return unsubscribe;
   }, []);

   const signUp = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, 'users', email), {
         email: email,
         password: password,
         savedShows: [],
      });
   };
   const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const logOut = () => {
      return signOut(auth);
   };
   return (
      <AuthContext.Provider value={{ signUp, user, signIn, logOut }}>
         {children}
      </AuthContext.Provider>
   );
}

export function UserAuth() {
   return useContext(AuthContext);
}
