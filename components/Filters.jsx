import React from "react";
import {connect} from "react-redux";
import {debounce} from 'lodash';
import {setParamFilter, resetFilter} from "../src/actions/people";
import {View, Text, Button, TextInput, Picker, StyleSheet} from 'react-native';

class Filters extends React.Component {
    state = {
        first: '',
        ageMin: this.props.ageMinDefault,
        ageMax: this.props.ageMaxDefault,
        ageMinFind: this.props.ageMinDefault,
        ageMaxFind: this.props.ageMaxDefault,
        genderChoose: this.props.gender,
        nameForStart: this.props.name,
        name: this.props.name,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((prevProps.ageMinDefault !== this.props.ageMinDefault) || (prevProps.ageMaxDefault !== this.props.ageMaxDefault)) {
            if (this.props.ageMinFilter === -1) {
                this.setState({
                    ageMin: this.props.ageMinDefault
                });
            }
            if (this.props.ageMaxFilter === 1000) {
                this.setState({
                    ageMax: this.props.ageMaxDefault
                });
            }
        }
    }

    gender = [{value: "both"}, {value: "female"}, {value: "male"}];

    ChangeAgeMaxMin = value => {
        this.setState({
            ageMin: value[0],
            ageMax: value[1],
            ageMinFind:value[0],
            ageMaxFind:value[1] ,
        }, this.timingAndFilter);
    };
    onChangeMinAge = event => {
        const {text} = event.nativeEvent;
        let value = text;
        this.setState({ageMin: value}, () => {
            value = text ? text : this.props.ageMinDefault;
            if ((value!=='') && (Number(value) >= this.props.ageMinDefault) && (Number(value) <= this.props.ageMaxDefault)) {
                this.setState({ageMinFind: value},this.timingAndFilter);
            }
            else{
                this.setState({ageMinFind: this.props.ageMinDefault},this.timingAndFilter);
            }
        });
    };
    onChangeMaxAge = event => {
        const {text} = event.nativeEvent;
        let value = text;
        this.setState({ageMax: value}, () => {
            value = text ? text : this.props.ageMaxDefault;
            if ((value!=='') && (Number(value) >= this.props.ageMinDefault) && (Number(value) <= this.props.ageMaxDefault)) {
                this.setState({ageMaxFind: value},this.timingAndFilter);
            }
            else{
                this.setState({ageMaxFind: this.props.ageMaxDefault},this.timingAndFilter);
            }
        });
    };
    searchName = (e) => {
        this.setState({nameForStart: e});
        if ((e.length > 1) || (e.length === 0)) {
            this.setState({name: e}, this.timingAndFilter);
        }
    };

    timingAndFilter = debounce(() => {
        let {ageMinFind:ageMin, ageMaxFind:ageMax, name, genderChoose} = this.state;
        ageMin = (ageMin === this.props.ageMinDefault) ? -1 : ageMin;
        ageMax = (ageMax === this.props.ageMaxDefault) ? 1000 : ageMax;
        this.props.setParamFilter({name, ageMin, ageMax, genderChoose});
    }, 400);

    reset = () => {
        this.ChangeAgeMaxMin([this.props.ageMinDefault, this.props.ageMaxDefault],
            this.setState({name: ""},
                this.setState({nameForStart: ""},
                    this.setState({genderChoose: this.gender[0].value},
                        this.timingAndFilter()))));
    };
    handleMenuClick = (e) => {
        this.setState({genderChoose: e}, this.timingAndFilter);
    };

    render() {
        const {ageMin:minValue, ageMax:maxValue, nameForStart,genderChoose} = this.state;
        return (
            <View>
                <View style={styles.ageRow}>
                    <Text style={styles.text}>Name:</Text>
                    <TextInput
                        style={styles.textInputName}
                        onChangeText={e => this.searchName(e)}
                        value={nameForStart}
                    />
                </View>
                <Text style={styles.text}>Age:</Text>
                <View style={styles.ageRow}>
                    <Text style={styles.text}>from:</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChange={this.onChangeMinAge}
                        value={String(minValue)}
                        text={String(minValue)}
                        clearButtonMode='unless-editing'
                    />
                    <Text style={styles.text}>to:</Text>
                    <TextInput
                        style={styles.textInput}
                        maxLength={3}
                        keyboardType='numeric'
                        onChange={this.onChangeMaxAge}
                        value={String(maxValue)}
                        clearButtonMode='while-editing'
                    />
                </View>
                <View style={styles.ageRow}>
                    <Text style={styles.text}>gender:</Text>
                    <View style={styles.dropDown}>
                    <Picker
                        selectedValue={genderChoose}
                        onValueChange={this.handleMenuClick}>
                        <Picker.Item label="both" value="both"/>
                        <Picker.Item label="female" value="female"/>
                        <Picker.Item label="male" value="male"/>
                    </Picker>
                    </View>
                    <Button style={styles.text} onPress={this.reset} title='ОЧИСТИТЬ'/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInputName: {
        flexGrow: 2,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    textInput: {
        height: 40,
        flexGrow: 2,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
    },

    text: {
        height: 40,
        paddingLeft: 10,
    },
    ageRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dropDown: {
        marginTop:10,
        marginBottom:10,
        height: 40,
        width: 140,
        borderColor: 'gray',
        borderWidth: 1,
        // paddingLeft: 10,
        borderRadius: 5,
    },


});

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
