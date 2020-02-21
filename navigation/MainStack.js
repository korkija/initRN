import {HomeScreen} from "../screens/HomeScreen";
import {createStackNavigator} from '@react-navigation/stack';
import React from "react";

const Stack = createStackNavigator();

const MainStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
            }
        }}
    >
        <Stack.Screen name="HomeScreen" component={HomeScreen} title={'HomeScreen'}
        />
    </Stack.Navigator>
);

export default MainStack;
