import { createContext, useContext, useState, useEffect } from 'react';

import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig.';

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
      return createUserWithEmailAndPassword(auth, email, password);
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
