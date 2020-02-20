import {HomeScreen} from "../screens/HomeScreen";
import TestScreen from "../screens/TestScreen";
import {createStackNavigator} from '@react-navigation/stack';
import React from "react";

const Stack = createStackNavigator();

const StackScreens = () => (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} title={'HomeScreen'}/>
        <Stack.Screen name="TestScreen" component={TestScreen}/>
    </Stack.Navigator>
);

export default StackScreens;
