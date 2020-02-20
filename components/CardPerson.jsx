import React,  from 'react';
import { Text,  Button, StyleSheet, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {ListItem} from "native-base";


export const CardPerson = ({firstNamePerson, lastNamePerson, idPerson, agePerson, genderPerson, findForDeletePerson}) => {
    const navigation = useNavigation();
    const modalMessage = (idPerson) => {
        navigation.navigate("ModalAsk", {'idPerson': idPerson, 'findForDeletePerson': findForDeletePerson});
    };
    return (
        <View style={styles.container} key={idPerson}>
            <ListItem>
                <Text >
                    - {genderPerson} - {firstNamePerson} {lastNamePerson},
                    age - {(new Date(Date.now())).getFullYear() - new Date(agePerson).getFullYear()},
                </Text>
                <Button
                    style={styles.contentContainer}
                    onPress={() => modalMessage(idPerson)}
                    title={String(idPerson)}
                />
            </ListItem>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,222,230,0.4)',
        borderRadius: 10,
        padding: 5,
    },
    contentContainer: {
        paddingTop: 30,
        borderRadius: 10,
    },
});


