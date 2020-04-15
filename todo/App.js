import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import TodoList from './components/TodoList';
import Form from './components/Form';
import { TodoService } from './services/TodoService';

export default class App extends Component {
  state = {
    list: [
      {
        id: '1',
        text: 'abc'
      }
    ],
  }
  
  async componentDidMount(){
    const list = await TodoService.list();
    this.setState({list});
  }

  add = async (text) => {
    const newItem = await TodoService.create({text});
    let list = [...this.state.list, newItem];
    this.setState({list});
  }
  remove = async (item) => {
    await TodoService.remove(item.id);
    const list = this.state.list.filter(itemList => itemList.id !== item.id);
    this.setState({list});
  } 
  render() {
    const {state} = this;
    return (
      <View style={styles.container}>
        <Form onAdd={this.add} />
        <TodoList list={state.list} onRemove={this.remove} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 5
  },
});
