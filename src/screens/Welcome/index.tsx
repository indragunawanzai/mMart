import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

const WelcomePage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <ImageBackground
            source={require('../../assets/fashion_bg.webp')}
            resizeMode='cover'
            blurRadius={2}
            style={styles.imageBackgroundStyle}
        >
            <View style={styles.overlay}>
                <Text style={styles.welcomeText}>Welcome to M-Mart</Text>
                <Text style={styles.descriptionText}>The home for a fashion</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('IntroPage')}
                    style={styles.getStartedButton}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default WelcomePage

const styles = StyleSheet.create({
    imageBackgroundStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 100,
    },
    welcomeText: {
        fontSize: 25,
        textDecorationLine: 'underline',
        color: 'white',
        fontFamily: 'Poppins-Regular'
    },
    descriptionText: {
        fontSize: 16,
        color: 'white',
        textDecorationLine: 'underline',
        fontFamily: 'Poppins-Regular',
        marginTop: 20,
    },
    getStartedButton: {
        backgroundColor: 'gray',
        borderWidth: 2,
        borderColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginTop: 48
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
})