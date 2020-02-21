import React from 'react';
import {CardPerson} from "./CardPerson";
import {Text, View, SectionList, StyleSheet} from 'react-native';

export const ListPeopleContainer = ({peopleFilterForPage, findForDeletePerson}) => {

    const ListFirstForChar = peopleFilterForPage.filter((item, index, array) => {
        if ((index === 0) || (String(array[index - 1].first_name)[0] !== String(item.first_name)[0])) {
            return (item.first_name);
        }
    });
    const ListFirstChar = ListFirstForChar.map((itemChar) => {
        return itemChar.first_name[0];
    });
    const peopleTitleData = ListFirstChar.map((itemChar) => {
        const listForChar = peopleFilterForPage.filter(item => itemChar === item.first_name[0] && !item.show);
        return ({title: itemChar, data: listForChar});
    });

    return (
        <View>
            <SectionList
                style={styles.listCard}
                sections={peopleTitleData}
                renderItem={({item}) =>
                    <CardPerson
                        firstNamePerson={item.first_name}
                        lastNamePerson={item.last_name}
                        index={item.id}
                        idPerson={item.id}
                        agePerson={item.dob}
                        genderPerson={item.gender}
                        findForDeletePerson={findForDeletePerson}
                    />
                }
                renderSectionHeader={
                    ({section}) =>
                        <Text>{(section.title)}</Text>
                }
                keyExtractor={(item, index) => index}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    listCard: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 200
    },
});
