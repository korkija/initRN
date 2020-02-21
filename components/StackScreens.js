import {HomeScreen} from "../screens/HomeScreen";
import {createStackNavigator} from '@react-navigation/stack';
import React from "react";

const Stack = createStackNavigator();

const StackScreens = () => (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} title={'HomeScreen'}/>
    </Stack.Navigator>
);

export default StackScreens;
