import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ChevronLeft, Mail } from 'lucide-react-native'
import { RootStackParamList } from '../../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
                    <Text style={styles.titleText}>Forgot Password</Text>

                    <View style={{ height: 18 }} />
                    <Text style={styles.subtitleText}>Enter email associated with your account and we’ll send and email with intructions to reset your password</Text>

                    <View style={{ height: 54 }} />
                    <View style={styles.inputContainer}>
                        <Mail size={14} color={"#BFBFBF"} />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter your email here'
                                placeholderTextColor={"#020202"}
                                keyboardType='email-address'
                            />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword

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
    inputContainer: {
        paddingTop: 16,
        paddingBottom: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFF4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        fontWeight: '400',
        fontFamily: 'Product Sans Light',
        color: '#020202'
    }
})