import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IntroPage from '../screens/Intro';
import { RootStackParamList } from './types';
import WelcomePage from '../screens/Welcome';
import SignUp from '../screens/Auth/SignUp';
import Login from '../screens/Auth/Login';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import VerificationCode from '../screens/Auth/VerificationCode';
import CreatePassword from '../screens/Auth/CreatePassword';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen
                name='IntroPage'
                component={IntroPage}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Welcome'
                component={WelcomePage}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Register'
                component={SignUp}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='ForgotPassword'
                component={ForgotPassword}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='VerificationCode'
                component={VerificationCode}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='CreatePassword'
                component={CreatePassword}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator