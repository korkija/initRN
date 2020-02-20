import React from 'react'
import {View, Text, StyleSheet} from "react-native";


export default Header = ({title}) => {
    return (
        <View style={style.viewStyle}>
            <Text style={style.textStyle}>{title} </Text>
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#30d0fe',
        height: 70,
        justifyContent: 'center',
        paddingTop: 15,
        paddingLeft: 22,
        elevation: 2,
        position: 'relative'
    },

    textStyle: {
        color: '#fff',
        fontSize: 28,
    }
});
