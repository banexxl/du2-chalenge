import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from "../../firebase"
import {
          signInWithEmailAndPassword,
          createUserWithEmailAndPassword,
          signOut,
          sendPasswordResetEmail,
          onAuthStateChanged
} from 'firebase/auth'



export const AuthContext = createContext()

export function useAuth() {
          return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {

          const [currentUser, setCurrentUser] = useState("")

          function createUser(email, password) {
                    return createUserWithEmailAndPassword(auth, email, password)
          }

          function loginUser(email, password) {
                    return signInWithEmailAndPassword(auth, email, password)
          }

          function logoutUser() {
                    return signOut(auth)
          }

          function forgotPassword(email) {
                    return sendPasswordResetEmail(auth, email)
          }

          useEffect(() => {
                    //setujemo usera.. koristi se useEffect da se ne bi pozivalo na svaki render, vec kad mount-ujemo komponentu
                    //mada ovaj unsubscribe ispod i ne radi bas tj pet puta mi pozove set current user
                    //prepolovio sam pozivanje loga ispod tako sto sam izbacio AuthProvider iz app.js-a -> vec ga imamo u index.js-u
                    //za sad mi ispisuje dva puta trenutnog user

                    const unsubscribe = onAuthStateChanged(auth, (user) => {
                              //setujem usera koji se loginovao i koji se registrovao
                              //onAuthStateChange se ispaljuje svaki put kad uradimo login logout register, tj authentication change
                              setCurrentUser(user)
                    }, [])

                    return unsubscribe
          })

          console.log("Authcontext says that the current user is: ", currentUser?.email);

          const value = {
                    currentUser,
                    createUser,
                    loginUser,
                    logoutUser,
                    forgotPassword,
          }

          return (
                    <AuthContext.Provider value={value}>
                              {children}
                    </AuthContext.Provider>
          )
}

