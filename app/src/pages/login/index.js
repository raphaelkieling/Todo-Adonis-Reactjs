import React, { Component } from 'react'

import {
    Container,
    Input,
    Button,
    ButtonText,
    ButtonSecondary,
    ButtonSecondaryText,
    Logo
} from './styles';
import { StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

export default class Login extends Component {
    constructor(props){
        super(props)

        this.handleSignInPress = this.handleSignInPress.bind(this)
    }
    static navigationOptions = {
        header: null,
    };

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            dispatch: PropTypes.func,
        }).isRequired,
    };

    handleSignInPress() {
        this.props.navigation.navigate('Todo');

    }
    render() {
        return (
            <Container>
                <Logo source={require('../../images/logo.png')} resizeMode="contain" />
                <Input
                    placeholder="Your Name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                />
                <Input
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                />

                <Button>
                    <ButtonText onPress={this.handleSignInPress}>enter</ButtonText>
                </Button>

                <ButtonSecondary>
                    <ButtonSecondaryText>register</ButtonSecondaryText>
                </ButtonSecondary>
            </Container>
        )
    }
}
