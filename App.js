import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <View style={{ marginTop: 50, width: "100%", paddingLeft: 20 }}>
          <Title>Daily Pick</Title>
          <SubTitle>Specially suggested just for you</SubTitle>
        </View>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;
const SubTitle = styled.Text`
  font-size: 16px;
  color: #9ea4ab;
`;
