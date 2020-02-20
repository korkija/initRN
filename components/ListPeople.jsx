import React from 'react';
import {CardPerson} from "./CardPerson";
import { Text,  View} from 'react-native';
import { List, ListItem } from 'native-base';


export const ListPerson = ({peopleFilterForPage, findForDeletePerson}) => {
    return (
        <View>
            {peopleFilterForPage.map((item, index, array) => {
                const is = ((index === 0) || (String(array[index - 1].first_name)[0] !== String(item.first_name)[0]));
                return (
                    <View key={item.id}>
                        <List>
                        {!!is &&
                        <ListItem itemDivider>
                            <Text>{(item.first_name)[0]}</Text>
                        </ListItem>
                        }
                        {!item.show &&
                        <CardPerson
                            firstNamePerson={item.first_name}
                            lastNamePerson={item.last_name}
                            index={index}
                            idPerson={item.id}
                            agePerson={item.dob}
                            genderPerson={item.gender}
                            findForDeletePerson={findForDeletePerson}
                        />
                        }
                        </List>
                    </View>
                )
            })}
        </View>
    )
};

export const ListPersonContainer = ListPerson;


