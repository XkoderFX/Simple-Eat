import React from 'react';
import { AuthContext } from '../../services/auth/auth.context';
import { AppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';

export const Navigation = () => {
    const { isAuthenticated } = useContext(AuthContext);
    console.log(isAuthenticated);
    return (
        <NavigationContainer>
            {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
        </NavigationContainer>
    );
};
