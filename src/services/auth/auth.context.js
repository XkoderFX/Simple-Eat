import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import logError from 'react-native/Libraries/Utilities/logError';
import { loginRequest, registerRequest } from './auth.service';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([]);

    const onLogin = async (email, password) => {
        try {
            setIsLoading(true);
            const user = await loginRequest(email, password);
            setUser(user);
        } catch (error) {
            setError([error.message]);
        } finally {
            setIsLoading(false);
        }
    };

    const onRegister = async (email, password, repeatedPassword) => {
        if (password !== repeatedPassword) {
            setError(["Error passwords don't match"]);
            return;
        }

        try {
            setIsLoading(true);
            const user = await registerRequest(email, password);
            setUser(user);
        } catch (error) {
            setError([error.message]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
