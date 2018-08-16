import React from 'react'
import { Text,Checkbox } from 'react-native'
import { TodoItemContainer, Description } from './styles'

export default ({ description }) => {
    return (
        <TodoItemContainer>
            <Description>{description}</Description>
        </TodoItemContainer>
    )
}
