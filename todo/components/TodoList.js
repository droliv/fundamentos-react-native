import React, {Component} from 'react';
import { View, FlatList, Text, Button } from 'react-native';

class TodoList extends Component {
    static defaultProps = {
        list: [],
        onRemove: () => {}
    }
    hadleRow = ({item, index}) => {
        return (
            <View style={{flexDirection: 'row', margin: 5}}>
                <Text style={{flex:1}}>
                    { this.formatListNumber(index) } - {item.text}
                </Text>
                <Button style={{width:30}} title="X" color="red" onPress={() => this.props.onRemove(item)} />
            </View>
        )
    }
    formatListNumber = (number, digits = 2) => {
        return ('0'.repeat(digits) + (number + 1)).slice(-digits);
    }
    render () {
        const { props } = this;
        const keyExtractor = item => item.id;
        return (
            <View>
                <FlatList
                data={ props.list }
                keyExtractor={keyExtractor}
                renderItem={this.hadleRow}
                />
            </View>
        );
    }
}

export default TodoList;