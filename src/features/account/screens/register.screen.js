import React from 'react';
import { useContext } from 'react';
import { Spacer } from '../../../components/spacer/spacer.component';
import { AuthContext } from '../../../services/auth/auth.context';
import {
    AccountContainer,
    AuthButton,
    AuthTextInput,
} from '../components/account.styles';
import AccountBackground from './Background';
import { Text } from '../../../components/typography/text.component';
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeatedPassword, setRepeatedPassword] = React.useState('');

    const { onRegister, error, isLoading } = useContext(AuthContext);
    return (
        <AccountBackground>
            <AccountContainer>
                <Spacer large>
                    <AuthTextInput
                        label="E-mail"
                        value={email}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        label="Email"
                        onChangeText={(text) => setEmail(text)}
                    ></AuthTextInput>
                </Spacer>
                <Spacer large>
                    <AuthTextInput
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        value={password}
                        label="Password"
                        onChangeText={(text) => setPassword(text)}
                    ></AuthTextInput>
                </Spacer>

                <Spacer large>
                    <AuthTextInput
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        value={repeatedPassword}
                        label="repeat password"
                        onChangeText={(text) => setRepeatedPassword(text)}
                    ></AuthTextInput>
                </Spacer>

                {error && (
                    <Spacer>
                        <Text variant="error">{error[0]}</Text>
                    </Spacer>
                )}
                <Spacer>
                    {!isLoading ? (
                        <AuthButton
                            onPress={() =>
                                onRegister(email, password, repeatedPassword)
                            }
                        >
                            register
                        </AuthButton>
                    ) : (
                        <ActivityIndicator
                            animating={true}
                            color={Colors.blue300}
                        ></ActivityIndicator>
                    )}
                </Spacer>
            </AccountContainer>

            <Spacer>
                <AuthButton onPress={() => navigation.goBack()}>
                    back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    );
};

export default RegisterScreen;
