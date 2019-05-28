import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Text>Leatherbound</Text>
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
