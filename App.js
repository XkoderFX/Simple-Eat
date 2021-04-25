import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
    useFonts as useOswald,
    Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import * as firebase from 'firebase';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import logError from 'react-native/Libraries/Utilities/logError';
import { AuthContextProvider } from './src/services/auth/auth.context';

const firebaseConfig = {
    apiKey: 'AIzaSyDwvbfbarxCahQNS3mwHYWeSB9zaTJR4x4',
    authDomain: 'fxfood-e60e9.firebaseapp.com',
    projectId: 'fxfood-e60e9',
    storageBucket: 'fxfood-e60e9.appspot.com',
    messagingSenderId: '426172820523',
    appId: '1:426172820523:web:c8df641e07f4c197270e6e',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });

    const [latoLoaded] = useLato({
        Lato_400Regular,
    });

    return (
        <>
            {oswaldLoaded && latoLoaded && (
                <>
                    <ThemeProvider theme={theme}>
                        <AuthContextProvider>
                            <Navigation />
                        </AuthContextProvider>
                    </ThemeProvider>
                    <ExpoStatusBar style="auto" />
                </>
            )}
        </>
    );
}
