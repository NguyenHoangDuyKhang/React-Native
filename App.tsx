import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  View,
} from "react-native";
import { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface iTodo {
  id: number;
  name: string;
}

export default function App() {
  const [todo, SetTodo] = useState("");
  const [listtodo, SetListtodo] = useState<iTodo[]>([]);

  const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1));
  };

  const handelAdd = () => {
    if (todo === "") return;
    SetListtodo([...listtodo, { id: random(1, 1000), name: todo }]);
    SetTodo("");
  };

  const handelDelete = (id: number) => {
    const newTodo = listtodo.filter((item) => item.id !== id);
    SetListtodo(newTodo);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Header</Text>

      {/* FORM */}
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(value) => SetTodo(value)}
          value={todo}
        />
        <Button title="Submit" onPress={() => handelAdd()} />
      </View>

      {/* LIST TODO */}
      <View style={styles.body}>
        <FlatList
          data={listtodo}
          renderItem={({ item }) => (
            <Pressable onPress={() => handelDelete(item.id)}>
              <Text style={styles.todoItem}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

// css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: "yellow",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 50,
  },
  input: {
    borderBottomWidth: 1,
    borderBlockColor: "red",
    marginHorizontal: 15,
    padding: 5,
    margin: 15,
    paddingHorizontal: 20,
  },
  body: {
    padding: 10,
  },
  todoItem: {
    fontSize: 20,
    borderWidth: 1,
    borderStyle: "solid",
    marginBottom: 20,
    padding: 10,
  },
});
