import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { FavoritesBar } from '../../../components/Favorites/Favorites-bar.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavoritesContext } from '../../../services/Favorites/Favorites.context';

import { Search } from '../components/search.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;
const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
    const { isLoading, restaurants } = useContext(RestaurantsContext);
    const { Favorites } = useContext(FavoritesContext);
    const [isToggled, setIsToggled] = useState(false);

    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading
                        size={50}
                        animating={true}
                        color={Colors.blue300}
                    />
                </LoadingContainer>
            )}
            <Search
                isFavoritesToggled={isToggled}
                onFavoritesToggle={() => setIsToggled(!isToggled)}
            />
            {isToggled && (
                <FavoritesBar
                    Favorites={Favorites}
                    onNavigate={navigation.navigate}
                />
            )}
            <RestaurantList
                data={restaurants}
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
        </SafeArea>
    );
};