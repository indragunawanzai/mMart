import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';

const Login = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const socialLogin = [
        {
            id: 1,
            slug: 'apple',
            icon: require('../../../assets/apple.webp'),
        },
        {
            id: 2,
            slug: 'google',
            icon: require('../../../assets/google.webp'),
        },
        {
            id: 3,
            slug: 'facebook',
            icon: require('../../../assets/facebook.webp'),
        },
    ]

    return (
        <View style={styles.page}>
            <Text style={styles.titleText}>{"Log into \nyour Account"}</Text>

            <View style={{ marginTop: 19 }}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email address"
                        placeholderTextColor="#000000"
                    />
                </View>

                <View style={{ height: 20 }} />
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        placeholderTextColor="#000000"
                    />
                </View>

                <TouchableOpacity
                    onPress={() => {
                        // navigation.navigate("ForgotPassword")
                        // navigation.navigate("VerificationCode")
                        navigation.navigate("CreatePassword")
                    }}
                    style={styles.forgotPassContainer}>
                    <Text style={styles.forgotPassText}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => { }}
                >
                    <Text style={styles.loginText}>LOG IN</Text>
                </TouchableOpacity>

                <Text style={styles.orLoginText}>or log in with</Text>

                <View style={styles.socialLoginContainer}>
                    {socialLogin.map((item, index) => {
                        return (
                            <TouchableOpacity key={index}>
                                <Image
                                    source={item.icon}
                                    style={styles.socialIcon}
                                />
                            </TouchableOpacity>
                        )
                    })}
                </View>

                <View style={styles.dontHaveAccountContainer}>
                    <Text style={styles.dontHaveAccountText}>Don't have an account? </Text>
                    <Text
                        onPress={() => navigation.goBack()}
                        style={styles.signupText}
                    >
                        Sign Up
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 100,
        backgroundColor: '#FFFFFF'
    },
    titleText: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 24,
        fontFamily: 'Product Sans',
        lineHeight: 48
    },
    textInputContainer: {
        borderBottomWidth: 1,
        borderColor: '#D6D6D6',
        paddingTop: 20,
        paddingBottom: 6,
    },
    textInput: {
        fontSize: 14,
        fontWeight: '300',
        fontFamily: 'Product Sans Light',
    },
    forgotPassContainer: {
        marginTop: 28,
        alignItems: 'flex-end'
    },
    forgotPassText: {
        fontSize: 12,
        lineHeight: 24,
        color: '#000000'
    },
    loginButton: {
        alignSelf: 'center',
        backgroundColor: '#2D201C',
        borderColor: 'white',
        paddingVertical: 17,
        paddingHorizontal: 41,
        borderRadius: 26,
        marginTop: 40,
        marginBottom: 22,
    },
    loginText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'Product Sans',
    },
    orLoginText: {
        fontSize: 12,
        lineHeight: 24,
        color: '#000000',
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: 'Product Sans Light'
    },
    socialLoginContainer: {
        marginTop: 28,
        alignSelf: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    socialIcon: {
        width: 42,
        height: 42,
        resizeMode: 'contain'
    },
    dontHaveAccountContainer: {
        marginTop: 109,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    dontHaveAccountText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#000000',
        fontFamily: 'Product Sans Light'
    },
    signupText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#000000',
        fontFamily: 'Product Sans Light',
        textDecorationLine: 'underline'
    }
})