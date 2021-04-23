import React from 'react';
import { TextInput } from 'react-native-paper';

import styled from 'styled-components/native';
import { colors } from '../../../infrastructure/theme/colors';
import { Button } from 'react-native-paper';

export const AccountContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthTitle = styled.Text`
    font-size: 30px;
`;

export const AuthButton = ({ children, onPress }) => {
    return (
        <Button
            styled={{ padding: 3 }}
            color={colors.brand.primary}
            icon="lock-open-outline"
            mode={'contained'}
            onPress={onPress}
        >
            {children}
        </Button>
    );
};

export const AuthTextInput = (props) => (
    <TextInput style={{ width: 300 }} {...props}></TextInput>
);
