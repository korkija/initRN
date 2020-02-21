import React from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
} from 'react-native';

export default function ModalAsk({route, navigation}) {

    const {idPerson, findForDeletePerson} = route.params;
    const modalMessageOK = (id) => {
        findForDeletePerson(id);
        navigation.navigate('ModalConfirm');
    };
    return (
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text>Вы действительно хотите пригласить на свидание пользователя с id = {idPerson}?</Text>
                <Button
                    title="YES"
                    onPress={() => modalMessageOK(idPerson)}
                />
                <Button
                    title="NO"
                    onPress={() => navigation.goBack()}
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
