import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Navbar, Logo, Container, Todos, TodoCreator, TodoInput,SaveTodoButton,SaveTodoButtonText } from './styles'
import TodoItem from './components/todoItem'

export default class Todo extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <Container>
                <Navbar>
                    <Logo source={require('../../images/logo.png')} resizeMode="contain" />
                </Navbar>
                <Todos>
                    <TodoItem description="Best game to create a paper" />
                </Todos>
                <TodoCreator>
                    <TodoInput/>
                    <SaveTodoButton>
                        <SaveTodoButtonText>save</SaveTodoButtonText>
                    </SaveTodoButton>
                </TodoCreator>
            </Container>
        )
    }
}

