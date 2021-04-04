import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { FavoritesContext } from '../../services/Favorites/Favorites.context';

const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
    const { Favorites, addToFavorites, removeFromFavorites } = useContext(
        FavoritesContext
    );

    const isFavourite = Favorites.find((r) => r.placeId === restaurant.placeId);

    return (
        <FavouriteButton
            onPress={() =>
                !isFavourite
                    ? addToFavorites(restaurant)
                    : removeFromFavorites(restaurant)
            }
        >
            <AntDesign
                name={isFavourite ? 'heart' : 'hearto'}
                size={24}
                color={isFavourite ? 'red' : 'white'}
            />
        </FavouriteButton>
    );
};
