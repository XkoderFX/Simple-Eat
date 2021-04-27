import React, { useContext } from 'react';
import { AuthButton } from '../../account/components/account.styles';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { AuthContext } from '../../../services/auth/auth.context';
import styled from 'styled-components/native';
import { Avatar, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { TouchableOpacity } from 'react-native';

const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[2]};
`;

const AvatarContainer = styled.View`
    align-items: center;
`;

export const SettingsScreen = () => {
    const { onLogout, user } = useContext(AuthContext);
    const navigation = useNavigation();
    return (
        <SafeArea>
            <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                <AvatarContainer>
                    <Avatar.Icon
                        size={180}
                        icon="human"
                        backgroundColor="#2182BD"
                    ></Avatar.Icon>
                    <Spacer position="top" size="large">
                        <Text variant="caption">{user.email}</Text>
                    </Spacer>
                </AvatarContainer>
            </TouchableOpacity>

            <List.Section>
                <SettingsItem
                    title="favorites"
                    description="View your favorites"
                    onPress={() => navigation.navigate('Favorites')}
                    left={(props) => (
                        <List.Icon
                            {...props}
                            color="black"
                            icon="heart"
                        ></List.Icon>
                    )}
                />
                <SettingsItem
                    title="logout"
                    description="logout from your account"
                    onPress={() => onLogout()}
                    left={(props) => (
                        <List.Icon
                            {...props}
                            icon="door"
                            color="black"
                        ></List.Icon>
                    )}
                />
            </List.Section>
        </SafeArea>
    );
};
