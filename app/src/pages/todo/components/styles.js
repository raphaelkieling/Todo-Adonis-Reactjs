import styled from 'styled-components'


const TodoItemContainer = styled.View`
    height: 70px;
    alignContent: space-between;
    justifyContent: center;
    backgroundColor:#F1F1F1;
    padding: 10px;
`

const Description = styled.Text`
    fontSize: 16px;
    color: #444444;
`

const Done = styled.TouchableHighlight`
    backgroundColor: red;
    height: 20px;
    width:20px;
`

export { TodoItemContainer, Description,Done }