import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { FavoritesContext } from '../../../services/Favorites/Favorites.context';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';

import { RestaurantList } from '../../restaurants/components/restaurant-list.component';
export const FavoritesScreen = () => {
    const navigation = useNavigation();
    const { favorites } = useContext(FavoritesContext);
    return (
        <RestaurantList
            data={favorites}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('RestaurantDetail', {
                                restaurant: item,
                            })
                        }
                    >
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                    </TouchableOpacity>
                );
            }}
            keyExtractor={(item) => item.name}
        />
    );
};
