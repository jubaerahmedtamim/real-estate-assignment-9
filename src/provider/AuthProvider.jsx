import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name);
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    } 
    
    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider);
    }
    const githubLogin = () =>{
        return signInWithPopup(auth,githubProvider);
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;