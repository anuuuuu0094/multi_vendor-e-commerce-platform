// C -> create()
// p -> provide()
// c -> consume()

import React, { useEffect, useState } from 'react'
import { createContext } from "react";

// use when component need data 
export const AuthContext = createContext();

import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const db = getFirestore();
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toaster } from '../utils/utils';
export default function AuthProvider({ children }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const [userInfo, setUserInfo] = useState(null)

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            const userDocRef = doc(db, 'users', user.uid)
            const userSnapshot = await getDoc(userDocRef)

            if (userSnapshot.exists()) {
                const userData = userSnapshot.data()

                localStorage.setItem("authUsers", JSON.stringify(userData))
                setUserInfo(userData)

                toaster("success", `🎉 Welcome back, ${userData.name}!`)

                setTimeout(() => {
                    navigate("/")
                    window.location.reload()
                }, 800)

            } else {
                  toaster("error", `No user data found in Firestore`)
            }

            setError('')
        } catch (err) {
            setError('Invalid email or password')
              toaster("error", `Invalid email or password`)
        }
    }


    
    const handleLogOut = () => {
        localStorage.removeItem("authUsers");
        localStorage.removeItem("uid");
        toast.success("Logged out successfully!");
        window.location.reload()
        setUserInfo(null)
    }

    return <AuthContext.Provider value={{ email, setEmail, setPassword, password, handleLogin, error, handleLogOut, userInfo }} >
        {children}
    </AuthContext.Provider>

}
