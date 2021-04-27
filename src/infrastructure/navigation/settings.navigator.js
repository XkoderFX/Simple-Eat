import React from 'react';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import AccountScreen from '../../features/account/screens/account.screen';
import LoginScreen from '../../features/account/screens/login.screen';
import RegisterScreen from '../../features/account/screens/register.screen';
import { SettingsScreen } from '../../features/settings/screen/settings.screen';
import { FavoritesScreen } from '../../features/settings/screen/favorites.screen';
import { CameraScreen } from '../../features/settings/screen/camera.screen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
            ></SettingsStack.Screen>

            <SettingsStack.Screen
                name="Favorites"
                component={FavoritesScreen}
            ></SettingsStack.Screen>

            <SettingsStack.Screen
                name="Camera"
                component={CameraScreen}
            ></SettingsStack.Screen>
        </SettingsStack.Navigator>
    );
};
