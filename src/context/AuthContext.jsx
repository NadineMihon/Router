import React, { createContext, useState } from "react"; 

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = (newUser, callback) => {
        setUser(newUser);
        if (callback) {
            setTimeout(() => {
                callback();
            }, 300) 
        };
    };

    const signOut = (callback) => {
        setUser(null);
        if (callback) {
            setTimeout(() => {
                callback();
            }, 300) 
        };
    };

    const value = { user, signIn, signOut };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};