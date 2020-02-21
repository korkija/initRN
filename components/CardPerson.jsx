import React  from 'react';
import { Text,  Button, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {ListItem} from "native-base";


export const CardPerson = ({firstNamePerson, lastNamePerson, idPerson, agePerson, genderPerson, findForDeletePerson}) => {
    const navigation = useNavigation();
    const modalMessage = (idPerson) => {
        navigation.navigate("ModalAsk", {'idPerson': idPerson, 'findForDeletePerson': findForDeletePerson});
    };
    return (
            <ListItem style={styles.containerCard} key={idPerson}>
                <Text >
                    - {genderPerson} - {firstNamePerson} {lastNamePerson},
                    age - {(new Date(Date.now())).getFullYear() - new Date(agePerson).getFullYear()},
                </Text>
                <Button
                    style={styles.contentContainerCard}
                    onPress={() => modalMessage(idPerson)}
                    title='Send'
                />
            </ListItem>
    )
};

const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: 'rgba(0,222,230,0.4)',
        borderRadius: 10,
        padding: 5,
        justifyContent: 'space-between',
    },
    contentContainerCard: {
        paddingTop: 30,
        borderRadius: 10,
        marginLeft:20,
            height: 40,
            paddingLeft: 10,
    },
});


