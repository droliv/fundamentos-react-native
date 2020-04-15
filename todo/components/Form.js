import React, {Component} from 'react';
import { View, TextInput, Button } from 'react-native';

export default class Form extends Component {
    static defaultProps = {
        onAdd: () => {}
    }
    state = {
        text: ''
    }
    handleChange = (text) => {
        this.setState({text});
    }
    add = () => {
        const {state} = this;
        if(state.text) {
            this.props.onAdd(state.text);
            this.handleChange('');
        }
    }
    render () {
        const {state} = this;
        return(
            <View>
                <TextInput value={state.text} onChangeText={this.handleChange} />
                <Button title="Add" color="#0062ac" onPress={this.add} />
            </View>
        );
    }
}