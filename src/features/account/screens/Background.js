import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import open from '../../../../assets/open';

const FluidImageBackground = styled(ImageBackground)`
    flex: 1;
    resize-mode: cover;
    justify-content: center;
    align-items: center;
`;

const image = require('../../../../assets/home_bg.jpg');

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
`;

const AccountBackground = ({ children }) => {
    return (
        <FluidImageBackground source={image}>
            <AccountCover></AccountCover>
            {children}
        </FluidImageBackground>
    );
};

export default AccountBackground;
