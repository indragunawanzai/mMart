import React, { useCallback, useRef, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';

const CreatePassword = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    const bottomSheetRef = useRef<BottomSheet>(null);

    const openSheet = () => {
        bottomSheetRef.current?.snapToIndex(0);
    };

    const closeSheet = () => {
        bottomSheetRef.current?.close();
    };

    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                opacity={0.6}
                onPress={() => closeSheet()}
                style={{ backgroundColor: '#353945' }}
            />
        ), []);

    return (
        <SafeAreaView style={styles.page}>
            <View>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <ChevronLeft size={20} color={"#1E3354"} />
                    </TouchableOpacity>
                    <View style={{ height: 34 }} />
                    <Text style={styles.titleText}>Create new password</Text>

                    <View style={{ height: 18 }} />
                    <Text style={styles.subtitleText}>Your new password must be different from previously used password</Text>

                    <View style={{ height: 58 }} />
                    <View style={styles.inputContainer}>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={setPassword}
                                placeholder='New Password'
                                placeholderTextColor={"#020202"}
                                secureTextEntry={showPassword}
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => {
                                setShowPassword(prev => !prev)
                            }}
                        >
                            {!showPassword
                                ? <Eye size={24} color={"#0000008A"} />
                                : <EyeOff size={24} color={"#0000008A"} />
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 20 }} />
                    <View style={styles.inputContainer}>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={setConfirmPassword}
                                placeholder='Confirm Password'
                                placeholderTextColor={"#020202"}
                                secureTextEntry={showConfirmPassword}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                setShowConfirmPassword(prev => !prev)
                            }}
                        >
                            {!showConfirmPassword
                                ? <Eye size={24} color={"#0000008A"} />
                                : <EyeOff size={24} color={"#0000008A"} />
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 107 }} />
                    <View>
                        <TouchableOpacity
                            disabled={(password && confirmPassword) ? false : true}
                            onPress={openSheet}
                            style={[
                                styles.confirmButton,
                                password && confirmPassword
                                    ? { backgroundColor: "#000000" }
                                    : { backgroundColor: "#B9B9B9", }
                            ]}>
                            <Text style={styles.confirmText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <BottomSheet
                ref={bottomSheetRef}
                backdropComponent={renderBackdrop}
                index={-1}
                enablePanDownToClose={true}
                handleIndicatorStyle={{
                    backgroundColor: '#E9E9E9'
                }}
                backgroundStyle={styles.sheetBackgroundStyle}
            >
                <BottomSheetView style={styles.sheetViewContainer}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={require('../../../assets/ic_succes.webp')}
                            style={styles.icon}
                        />
                    </View>

                    <View style={{
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                        <Text style={styles.sheetTitleText}>Your password has been changed</Text>
                        <View style={{ height: 15 }} />
                        <Text style={styles.sheetSubtitleText}>Welcome back! Discover now!</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.browseButton}
                        onPress={closeSheet}
                    >
                        <Text style={styles.browseText}>Browse home</Text>
                    </TouchableOpacity>
                </BottomSheetView>
            </BottomSheet>
        </SafeAreaView>
    )
}

export default CreatePassword

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    container: {
        marginTop: 18,
        paddingHorizontal: 32
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
    confirmButton: {
        paddingVertical: 12,
        paddingHorizontal: 36,
        borderRadius: 25,
        alignSelf: 'center'
    },
    confirmText: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        textAlign: 'center',
        fontFamily: "Product Sans",
        color: "#FFFFFF"
    },

    sheetBackgroundStyle: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        shadowColor: 'rgba(4, 6, 15, 0.08)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 100,
        shadowOpacity: 1,
        elevation: 24,
    },
    sheetViewContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 15,
        paddingBottom: 50,
    },
    iconContainer: {
        width: 100,
        height: 100,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    icon: {
        width: 46,
        height: 57,
        resizeMode: 'contain'
    },
    sheetTitleText: {
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 22,
        letterSpacing: -0.41,
        fontFamily: 'Product Sans Medium',
        color: '#332218',
    },
    sheetSubtitleText: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'Product Sans Medium',
        color: '#332218'
    },
    browseButton: {
        backgroundColor: '#000000',
        paddingVertical: 18,
        paddingHorizontal: 30,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    browseText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Product Sans'
    }
})