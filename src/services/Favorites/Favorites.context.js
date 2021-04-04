import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export const FavoritesContext = createContext();
    
export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const saveFavorites = async (favorite) => {
        try {
            const serializedFavorite = JSON.stringify(favorite);
            await AsyncStorage.setItem('@favorites', serializedFavorite);
        } catch (error) {
            console.error(error);
        }
    };

    const loadFavorites = async () => {
        try {
            const serializedFavorite = await AsyncStorage.getItem('@favorites');
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
        loadFavorites();
    }, []);

    useEffect(() => {
        saveFavorites(favorites);
    }, [favorites]);

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
