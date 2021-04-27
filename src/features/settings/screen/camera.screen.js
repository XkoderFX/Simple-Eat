import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Camera } from 'expo-camera';
import { useRef } from 'react';
import styled from 'styled-components/native';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%;
`;

export const CameraScreen = () => {
    const cameraRef = useRef();
    const [hasPermission, setHasPermission] = useState();

    const snap = async () => {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            console.log(photo);
        }
    };

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <ProfileCamera
            ratio={'16:9'}
            ref={(camera) => (cameraRef.current = camera)}
            type={Camera.Constants.Type.front}
        >
            <Pressable style={{ flex: 1 }} onPress={snap}></Pressable>
        </ProfileCamera>
    );
};
