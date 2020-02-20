import React, {useState} from 'react';
import {Platform, StatusBar, Text, ScrollView, Button, StyleSheet, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {ListItem} from "native-base";


export const CardPerson = ({firstNamePerson, lastNamePerson, index, idPerson, agePerson, genderPerson, findForDeletePerson}) => {
    const navigation = useNavigation()
    //const [show, toggleShow] = useState(false);
    //const [showSecond, toggleShowSecond] = useState(false);
    const modalMessage = (idPerson) => {
        //alert('IDPerson');
        console.log("mmmmmmmmmmmmmmmmmmmm");
        console.log(idPerson);
        navigation.navigate("ModalAsk", {'idPerson': idPerson, 'findForDeletePerson': findForDeletePerson});
        //toggleShow(!show);
    };
    return (
        // <View>
        //     {/*{show && <Modal idForShow={idPerson} handleShowNext={modalMessageAll} handleShowToggle={modalMessage(idPerson)}/>}*/}
        //     {/*{showSecond && <ModalPositive idForShow={idPerson} handleShowToggle={modalMessageOK}/>}*/}
        <View style={styles.container}>
            {/*<View className={classNameIsActive} onClick={modalMessage}>*/}
            <ListItem>
                <Text key={idPerson}>

                    {/*{genderPerson === "male" ? <Icon type="man"/> : <Icon type="woman"/>}*/}
                    ---{genderPerson} - {firstNamePerson} {lastNamePerson},
                    age - {(new Date(Date.now())).getFullYear() - new Date(agePerson).getFullYear()},
                </Text>
                <Button
                    style={styles.contentContainer}
                    onPress={() => modalMessage(idPerson)}
                    title={idPerson}
                />
            </ListItem>
        </View>
        //
        // </View>
    )
};


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'rgba(0,222,230,0.4)',
        borderRadius: 10,
        padding: 5,

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
        borderRadius: 10,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});


