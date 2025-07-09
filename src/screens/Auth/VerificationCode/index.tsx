import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { ChevronLeft, CircleEllipsis, Ellipsis, Mail } from 'lucide-react-native';

const VerificationCode = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [otpCode, setOtpCode] = useState(['', '', '', '']);

    return (
        <SafeAreaView style={styles.page}>
            <View>
                <View style={{
                    marginTop: 18,
                    paddingHorizontal: 32
                }}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <ChevronLeft size={20} color={"#1E3354"} />
                    </TouchableOpacity>
                    <View style={{ height: 34 }} />
                    <Text style={styles.titleText}>Verification Code</Text>

                    <View style={{ height: 18 }} />
                    <Text style={styles.subtitleText}>Please enter the verification code we sent to your email address</Text>

                    <View style={{ height: 58 }} />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: 12
                    }}>
                        {otpCode.map((item, index) => {
                            return (
                                <View key={index} style={{
                                    width: 58,
                                    height: 58,
                                    borderWidth: 1,
                                    borderColor: '#A5A7AC',
                                    borderRadius: 100,
                                }} />
                            );
                        })}
                    </View>

                    <View style={{ height: 47 }} />
                    <Text style={styles.resendText}>Resend in 00:10</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default VerificationCode

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    titleText: {
        fontSize: 24,
        lineHeight: 48,
        color: "#000000",
        fontWeight: '700',
        fontFamily: 'Product Sans'
    },
    subtitleText: {
        fontSize: 14,
        fontFamily: 'Product Sans Light',
        lineHeight: 24,
        color: '#000000'
    },
    backButton: {
        width: 34,
        height: 34,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    resendText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        color: "#12142080",
        fontFamily: 'Product Sans Light'
    }
})