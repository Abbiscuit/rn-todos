import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");
  const changeHandler = value => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <View style={styles.button}>
        <Button
          onPress={() => submitHandler(text)}
          title="追加する"
          color="#fff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  button: {
    backgroundColor: "coral",
    borderRadius: 3
  }
});

export default AddTodo;
