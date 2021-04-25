import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import firebase from 'firebase';
import { useContext } from 'react';
import { AuthContext } from '../auth/auth.context';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);

    const saveFavorites = async (favorite, uid) => {
        try {
            const serializedFavorite = JSON.stringify(favorite);
            await AsyncStorage.setItem(`@favorites-${uid}`, serializedFavorite);
        } catch (error) {
            console.error(error);
        }
    };

    const loadFavorites = async (uid) => {
        try {
            const serializedFavorite = await AsyncStorage.getItem(
                `@favorites-${uid}`
            );
            const deserializedFavorite = JSON.parse(serializedFavorite);
            setFavorites(deserializedFavorite);
        } catch (error) {
            console.error(error);
        }
    };

    const add = (restaurant) => {
        setFavorites([...favorites, restaurant]);
    };

    const remove = (restaurant) => {
        const newFavorites = favorites.filter(
            (x) => x.placeId !== restaurant.placeId
        );

        setFavorites(newFavorites);
    };

    useEffect(() => {
        if (user) {
            loadFavorites(user.uid);
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            saveFavorites(favorites, user.uid);
        }
    }, [favorites, user]);

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addToFavorites: add,
                removeFromFavorites: remove,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
