import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    Button,
    View,
} from 'react-native';

export default function TestScreen({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.welcomeContainer}>
                    <Text>TestScreen</Text>
                    <Image
                        style={styles.imageM}
                        source={
                            require('../assets/images/123456.jpg')
                        }
                    />
                    <Button
                        title="Go to next page"
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

// TestScreen.navigationOptions = {
//     header: null,
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageM: {
        width: 190,
        height: 320
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },


});
