import {HomeScreen} from "../screens/HomeScreen";
import {createStackNavigator} from '@react-navigation/stack';
import React from "react";

const Stack = createStackNavigator();

const MainStackScreens = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
            }
        }}
    >
        <Stack.Screen name="HomeScreen" component={HomeScreen} title={'HomeScreen'}
                      // options={{
                      //     headerStyle: {
                      //         backgroundColor: '#f4511e',
                      //     },
                      //     headerTintColor: '#fff',
                      //     headerTitleStyle: {
                      //         fontWeight: 'bold',
                      //     }
                      // }}
        />
    </Stack.Navigator>
);

export default MainStackScreens;
