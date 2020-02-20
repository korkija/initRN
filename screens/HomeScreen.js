import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import {ListPersonContainer} from "../components/ListPeople";
import {setFilter} from "../src/helpers/filterList";
import {sortByName} from "../src/helpers/SortByName";
import {unShowPersonOnList} from "../src/helpers/unShowPerson";
import {findForDeletePerson, getChangeSizePage, getPage, getPeople} from "../src/actions/people";
import {connect} from "react-redux";
import {MyFilters} from "../components/Filters";

class homeScreen extends Component {
    componentDidMount() {
        console.log('1 componentDidMount');
        this.props.getPeople();
    }

    render() {
        const {isLoading,peopleFilter,findForDeletePerson} = this.props;
        if (isLoading)  return null;
        return (
            <View style={styles.container}>
                    <MyFilters/>
                    <View style={styles.welcomeContainer}>
                        <ListPersonContainer
                            peopleFilterForPage={peopleFilter}
                            findForDeletePerson={findForDeletePerson}
                        />
                    </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('2 mapStateToProps HomeScreen');
    return ({
        isLoading: state.people.isLoading,
        peopleFilter: setFilter(state.people.name,
            state.people.ageMinFilter,
            state.people.ageMaxFilter,
            state.people.genderChoose,
            sortByName(unShowPersonOnList(state.people.people, state.people.notShow))),// state.people.peopleFilter,
    })
};

const mapDispatchToProps = {
    getPeople,
    getChangeSizePage,
    getPage,
    findForDeletePerson,
};
export const HomeScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(homeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
});
