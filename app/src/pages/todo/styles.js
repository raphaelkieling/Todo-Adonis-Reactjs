import styled from 'styled-components'

const Navbar = styled.View`
    height: 70px;
    borderTopWidth: 4px;
    borderTopColor: #2ECC71;
`

const Logo = styled.Image`
    width: 50px;
    height: 40px;
    alignSelf: center;
    margin: 10px;
`

const Container = styled.View`
    flex:1;
    justifyContent: space-between;
`
const Todos = styled.View`
    flex: 1;
`

const TodoCreator = styled.View`
    backgroundColor: #2ECC71;
    height: 55px;
    flexDirection: row;
    alignItems:center;
`

const TodoInput = styled.TextInput`
    flex:8;
    color: #707070;
`

const SaveTodoButton = styled.TouchableHighlight`
    height:20px;
    flex:4;
    justifyContent:center;
    alignContent:center;
`

const SaveTodoButtonText = styled.Text`
    fontSize:16px;
    color: white;
    textAlign: center;
`

export {
    Navbar, Logo, Container, Todos, TodoCreator, TodoInput, SaveTodoButton,SaveTodoButtonText
};