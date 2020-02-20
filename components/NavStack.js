// import {AppLoading, Screen} from 'expo';
// import {Asset} from 'expo-asset';
// import * as Font from 'expo-font';
// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackScreens from "./StackScreens";
import ModalAsk from "../screens/ModalAsk";
import ModalConfirm from "../screens/ModalConfirm";

const RootStack = createStackNavigator();

const NavStack = () => (
    <NavigationContainer>
        <RootStack.Navigator mode={'modal'} screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'transparent' } }}>
            <RootStack.Screen name="StackScreens" component={StackScreens}/>
            <RootStack.Screen name="ModalAsk" component={ModalAsk}/>
            <RootStack.Screen name="ModalConfirm" component={ModalConfirm}/>
        </RootStack.Navigator>
    </NavigationContainer>
);

export default NavStack;



