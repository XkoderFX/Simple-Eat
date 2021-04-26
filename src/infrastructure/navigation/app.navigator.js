import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { SafeArea } from '../../components/utility/safe-area.component';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { AuthContext } from '../../services/auth/auth.context';
import { useContext } from 'react';
import { Button } from 'react-native-paper';
import { AuthButton } from '../../features/account/components/account.styles';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavoritesContextProvider } from '../../services/Favorites/Favorites.context';
import { SettingsScreen } from '../../features/settings/screen/settings.screen';
import { SettingsNavigator } from './settings.navigator';

const Tab = createBottomTabNavigator();
const TAB_ICON = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings',
};

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
    };
};

export const AppNavigator = () => (
    <FavoritesContextProvider>
        <LocationContextProvider>
            <RestaurantsContextProvider>
                <Tab.Navigator
                    screenOptions={createScreenOptions}
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen
                        name="Restaurants"
                        component={RestaurantsNavigator}
                    />
                    <Tab.Screen name="Map" component={MapScreen} />
                    <Tab.Screen name="Settings" component={SettingsNavigator} />
                </Tab.Navigator>
            </RestaurantsContextProvider>
        </LocationContextProvider>
    </FavoritesContextProvider>
);
