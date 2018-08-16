import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #FFFFFF;
`;

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #F6F6F6;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 20px;
  color: #707070;
`;


const Button = styled.TouchableHighlight`
  padding: 20px;
  borderRadius: 5px;
  backgroundColor: #2ECC71;
  alignSelf: stretch;
  margin: 15px;
  marginHorizontal: 20px;
`;

const ButtonSecondary = styled.TouchableHighlight`
  padding: 20px;
  borderRadius: 5px;
  alignSelf: stretch;
  margin: 15px;
  marginHorizontal: 20px;
`;

const ButtonSecondaryText = styled.Text`
  color: #2ECC71;
  fontWeight: bold;
  fontSize: 20px;
  textAlign: center;
`;

const ButtonText = styled.Text`
  color: #FFFF;
  fontWeight: bold;
  fontSize: 20px;
  textAlign: center;
`;

const Logo = styled.Image`
  width: 200px;
  height: 165px;
  marginBottom: 20px;
`


export { Container, Input, Button, ButtonText, ButtonSecondary, ButtonSecondaryText, Logo };