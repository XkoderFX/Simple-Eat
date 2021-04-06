import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../../features/account/screens/account.screen';
import LoginScreen from '../../features/account/screens/login.screen';
import RegisterScreen from '../../features/account/screens/register.screen';

const Stack = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name="Main" component={AccountScreen}></Stack.Screen>
            <Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen
                name="register"
                component={RegisterScreen}
            ></Stack.Screen>
        </Stack.Navigator>
    );
};
