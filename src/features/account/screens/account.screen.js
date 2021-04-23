import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text } from 'react-native';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
    AccountContainer,
    AuthButton,
    AuthTitle,
} from '../components/account.styles';
import AccountBackground from './Background';
const AccountScreen = () => {
    const navigation = useNavigation();

    return (
        <AccountBackground>
            <AuthTitle>Fx Food</AuthTitle>
            <AccountContainer>
                <Spacer>
                    <AuthButton onPress={() => navigation.navigate('login')}>
                        login
                    </AuthButton>
                </Spacer>
                <Spacer>
                    <AuthButton onPress={() => navigation.navigate('register')}>
                        register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
};

export default AccountScreen;
