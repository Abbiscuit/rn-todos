import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}> ONE </Text>
      <Text style={styles.boxTwo}> TWO </Text>
      <Text style={styles.boxThree}> THREE </Text>
      <Text style={styles.boxFour}> FOUR </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 40,
    backgroundColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end"
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10
  },
  boxTwo: {
    flex: 2,
    backgroundColor: "gold",
    padding: 20
  },
  boxThree: {
    flex: 3,
    backgroundColor: "coral",
    padding: 30
  },
  boxFour: {
    flex: 3,
    backgroundColor: "skyblue",
    padding: 40
  }
});
