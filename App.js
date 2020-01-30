import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "shaun2", id: "2" },
    { name: "shaun3", id: "3" },
    { name: "shaun4", id: "4" },
    { name: "shaun5", id: "5" },
    { name: "shaun5", id: "6" },
    { name: "shaun5", id: "7" },
    { name: "shaun5", id: "8" },
    { name: "shaun5", id: "9" },
    { name: "shaun5", id: "10" }
  ]);

  const pressHandler = id => {
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id} // idをkeyと見立てる
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
});
