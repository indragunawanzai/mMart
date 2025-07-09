import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';

const SignUp = () => {
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
            <Text style={styles.titleText}>{"Create \nyour Account"}</Text>

            <View style={{ marginTop: 19 }}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your name"
                        placeholderTextColor="#000000"
                    />
                </View>

                <View style={{ height: 20 }} />
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

                <View style={{ height: 20 }} />
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Confirm password"
                        placeholderTextColor="#000000"
                    />
                </View>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Login');
                    }}
                    style={styles.signUpButton}
                >
                    <Text style={styles.signupText}>SIGN UP</Text>
                </TouchableOpacity>

                <Text style={styles.orsignupText}>or sign up with</Text>

                <View style={styles.socialSignupContainer}>
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
                    <Text style={styles.dontHaveAccountText}>Already have account? </Text>

                    <Text
                        onPress={() => navigation.navigate("Login")}
                        style={styles.loginText}
                    >Login</Text>
                </View>
            </View>
        </View>
    )
}

export default SignUp

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
    signUpButton: {
        alignSelf: 'center',
        backgroundColor: '#2D201C',
        borderColor: 'white',
        paddingVertical: 17,
        paddingHorizontal: 41,
        borderRadius: 26,
        marginTop: 44,
        marginBottom: 28,
    },
    signupText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'Product Sans',
    },
    orsignupText: {
        fontSize: 12,
        lineHeight: 24,
        color: '#000000',
        fontWeight: '400',
        textAlign: 'center'
    },
    socialSignupContainer: {
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
    loginText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#000000',
        fontFamily: 'Product Sans Light',
        textDecorationLine: 'underline'
    }
})