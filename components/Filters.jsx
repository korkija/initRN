import React from "react";
import {connect} from "react-redux";
import {debounce} from 'lodash';
import {setParamFilter, resetFilter} from "../src/actions/people";
import {View, Text, Button, TextInput} from 'react-native';

import {Dropdown} from 'react-native-material-dropdown';

class Filters extends React.Component {
    state = {
        first: '',
        ageMin: this.props.ageMinDefault,
        ageMax: this.props.ageMaxDefault,
        genderChoose: this.props.gender,
        nameForStart: this.props.name,
        name: this.props.name,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((prevProps.ageMinDefault !== this.props.ageMinDefault) || (prevProps.ageMaxDefault !== this.props.ageMaxDefault)) {
            if (this.props.ageMinFilter === -1) {
                console.log("this.props.ageMinDefault");
                console.log(this.props.ageMinDefault);
                this.setState({
                    ageMin: this.props.ageMinDefault
                });
            }
            if (this.props.ageMaxFilter === 1000) {
                console.log("this.props.ageMaxDefault");
                console.log(this.props.ageMaxDefault);
                this.setState({
                    ageMax: this.props.ageMaxDefault
                });
            }
        }
    }

    gender = [{value: "both"}, {value: "female"}, {value: "male"}];

    debounceEvent(...arg) {
        this.debounceEvent = debounce(...arg);
        console.log('debounceEvent');
        console.log(arg);
        return e => {
            e.persist();

            return this.debounceEvent(e);
        }
    }

    ChangeAgeMaxMin = value => {
        console.log("ChangeAgeMaxMin");
        this.setState({
            ageMin: value[0],
            ageMax: value[1],
        }, this.timingAndFilter);
    };
    onChangeMinAge = event => {
        const {text} = event.nativeEvent;
        let value=text;
        this.setState({ageMin: value}, () => {
            value=text?text:this.props.ageMinDefault;
            if ((Number(value)) && (Number(value) >= this.props.ageMinDefault) && (Number(value) <= this.props.ageMaxDefault)) {
                this.timingAndFilter();
            }
        });
    };
    onChangeMaxAge = event => {
        const {text} = event.nativeEvent;
        let value=text;
        this.setState({ageMax: value}, () => {
            value=text?text:this.props.ageMinDefault;
            if ((Number(value)) && (Number(value) >= this.props.ageMinDefault) && (Number(value) <= this.props.ageMaxDefault)) {
                this.timingAndFilter();
            }
        });

        // this.setState({ageMax: value}, () => {
        //     if ((Number(value)) && (Number(value) >= this.props.ageMinDefault) && (Number(value) <= this.props.ageMaxDefault)) {
        //         this.timingAndFilter();
        //     }
        // });
        // if ((Number(value)) && (Number(value) >= this.props.ageMinDefault)
        //     && (Number(value) >= this.props.ageMaxDefault)) {
        //     this.setState({ageMin: value}, this.timingAndFilter)
        // } else {
        //     this.setState({ageMin: this.props.ageMaxDefault}, this.timingAndFilter)
        // }
        // this.setState({
        //     ageMax: value,
        // }, this.timingAndFilter);
    };
    searchName = (e) => {
        //console.log(e);
        this.setState({nameForStart: e});
        console.log('searchName');
        console.log(this.state.nameForStart);
        if ((e.length > 1) || (e.length === 0)) {
            this.setState({name: e},
                this.timingAndFilter);
        }
    };

    timingAndFilter = () => {

        let {ageMin, ageMax, name, genderChoose} = this.state;
        console.log('ageMin',ageMin, 'ageMax',ageMax, name, genderChoose);
        ageMin = (ageMin === this.props.ageMinDefault) ? -1 : ageMin;
        ageMax = (ageMax === this.props.ageMaxDefault) ? 1000 : ageMax;
        this.props.setParamFilter({name, ageMin, ageMax, genderChoose});
    };

    reset = () => {
        console.log("hello");

        this.ChangeAgeMaxMin([this.props.ageMinDefault, this.props.ageMaxDefault],
            this.setState({name: ""},
                this.setState({nameForStart: ""},
                    this.setState({genderChoose: this.gender[0].value},
                        this.timingAndFilter()))));
    };
    handleMenuClick = (e) => {
        this.setState({genderChoose: e.item.props.children}, this.timingAndFilter);
    };
    onChange = (event) => {
        const { text} = event.nativeEvent;
        this.setState({first: text});
    };

    render() {
        const {ageMin, ageMax, nameForStart, name, genderChoose} = this.state;
        const menu = (
            <Dropdown
                label='Favorite Fruit'
                data={this.gender}
                onChangeText={this.handleMenuClick}
            />
        );
        console.log('ageMin');
        console.log(ageMin);
        const minValue = this.props.ageMinFilter === -1 ? this.props.ageMinDefault : ageMin;
        const maxValue = this.props.ageMaxFilter === 1000 ? this.props.ageMaxDefault : ageMax;
        return (
            <View>
                <Text>Name:</Text>
                <View className="search">
                    <TextInput label='First Name' onChange={this.onChange} value={this.state.first}/>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={this.searchName}
                        value={nameForStart}
                    />
                </View>
                <Text>Age:</Text>
                <View>
                    <Text>from:</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        // style={styles.textInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChange={this.onChangeMinAge}
                        //onChangeText={this.debounceEvent(this.onChangeMinAge(minValue), 1000)}
                        value={String(minValue)}
                        text={String(minValue)}
                        clearButtonMode='unless-editing'
                    />
                    <Text>to:</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        // style={styles.textInput}
                        maxLength={3}
                        keyboardType='numeric'
                        onChange={this.onChangeMaxAge}
                        value={String(maxValue)}
                        clearButtonMode='while-editing'
                    />
                </View>
                <View>
                    <Text>gender:</Text>
                    <Button onPress={this.reset} title='ОЧИСТИТЬ'/>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    ageMin: state.people.ageMin,
    ageMax: state.people.ageMax,
    ageMinDefault: state.people.ageMinDefault,
    ageMaxDefault: state.people.ageMaxDefault,
    ageMinFilter: state.people.ageMinFilter,
    ageMaxFilter: state.people.ageMaxFilter,
    name: state.people.name,
    gender: state.people.genderChoose,
});

const mapDispatchToProps = {
    resetFilter,
    setParamFilter,
};
export const MyFilters = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters);
