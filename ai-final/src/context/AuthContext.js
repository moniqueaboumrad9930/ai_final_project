import React, {createContext, useContext, useEffect, useState} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../Firebase';


//create context
const AuthContext = createContext();

//create provider
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{user, loading}}>
            {children}
        </AuthContext.Provider>
    );

};

//custom hook 

export const useAuth= () =>useContext(AuthContext);

    