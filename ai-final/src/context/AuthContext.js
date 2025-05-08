import React, {createContext, useContext, useEffect, useState} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../Firebase';


//create context
const AuthContext = createContext();

//create provider
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>
            {!loading && children}
        </AuthContext.Provider>
    );

};

//custom hook 

export const useAuth= () =>useContext(AuthContext);

    