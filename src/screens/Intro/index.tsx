import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

const IntroPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.page}>
            <View style={{
                position: 'absolute',
                bottom: 0,
                height: '50%',
                width: '100%',
                backgroundColor: '#464447'
            }} />

            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.titleText}>Discover something new</Text>
                    <Text style={styles.subtitleText}>Special new arrivals just for you</Text>
                </View>

                <View style={{
                    height: 368,
                    width: 250,
                    backgroundColor: 'orange',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 30,
                }}>
                    <Image 
                        source={require('../../assets/banner.webp')}
                        style={{
                            width: 281,
                            height: 368,
                            borderRadius: 8,
                            resizeMode: 'cover'
                        }}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Register');
                    }}
                    style={styles.shoppingButton}>
                    <Text style={styles.shoppingText}>Shopping now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default IntroPage

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        marginTop: 100,
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'Product Sans',
        fontWeight: '700',
        letterSpacing: -0.36,
        lineHeight: 34,
        color: '#000000'
    },
    subtitleText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        fontFamily: 'Product Sans',
        marginTop: 17,
    },
    shoppingButton: {
        alignSelf: 'center',
        backgroundColor: 'gray',
        borderWidth: 2,
        borderColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 53,
        borderRadius: 30,
        marginTop: 48,
    },
    shoppingText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'Product Sans'
    }
})