import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import {ListPeopleContainer} from "../components/ListPeople";
import {getFilterList} from "../components/helpersForShow/getFilterList";
import {findForDeletePerson, getChangeSizePage, getPage, getPeople} from "../store/actions/people";
import {connect} from "react-redux";
import {MyFilters} from "../components/Filters";

class homeScreen extends Component {
    componentDidMount() {
        this.props.getPeople();
    }

    render() {
        const {isLoading, peopleFilter, findForDeletePerson} = this.props;
        if (isLoading) return null;
        return (
            <View style={styles.container}>
                <MyFilters/>
                <View style={styles.welcomeContainer}>
                    <ListPeopleContainer
                        peopleFilterForPage={peopleFilter}
                        findForDeletePerson={findForDeletePerson}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 10,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
});

const mapStateToProps = (state) => {
    return ({
        isLoading: state.people.isLoading,
        peopleFilter: getFilterList(state.people),
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
