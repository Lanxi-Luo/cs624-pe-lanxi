import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
      nextIndex: 0,
    };
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }

  inputChange(inputValue) {
    console.log(' Input Value: ', inputValue);
    this.setState({inputValue});
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    this.setState(
      prevState => ({
        todos: [
          ...prevState.todos,
          {
            title: prevState.inputValue,
            todoIndex: prevState.nextIndex,
            complete: false,
          },
        ],
        nextIndex: prevState.nextIndex + 1,
        inputValue: '',
      }),
      () => {
        console.log('State: ', this.state);
      },
    );
  }

  deleteTodo(todoIndex) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.todoIndex !== todoIndex),
    }));
  }

  toggleComplete(todoIndex) {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.todoIndex === todoIndex) {
          return {...todo, complete: !todo.complete};
        }
        return todo;
      }),
    }));
  }

  setType(type) {
    this.setState({type});
  }

  render() {
    const {todos, inputValue, type} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList
            type={type}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos}
          />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
