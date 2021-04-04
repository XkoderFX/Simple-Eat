import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const [Favorites, setFavorites] = useState([]);

    const add = (restaurant) => {
        setFavorites([...Favorites, restaurant]);
    };

    const remove = (restaurant) => {
        const newFavorites = Favorites.filter(
            (x) => x.placeId !== restaurant.placeId
        );

        setFavorites(newFavorites);
    };
    return (
        <FavoritesContext.Provider
            value={{
                Favorites,
                addToFavorites: add,
                removeFromFavorites: remove,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
