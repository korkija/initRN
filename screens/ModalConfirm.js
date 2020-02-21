import React from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
} from 'react-native';

export default function ModalConfirm({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text>Приглашение отправлено</Text>
                <Button
                    title="OK"
                    onPress={() => navigation.navigate('HomeScreen')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    },
    welcomeContainer: {
        padding: 20,
        backgroundColor: 'white'
    },
});
