import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  const [name, SetName] = useState<string>("KSboy");
  const [age, SetAge] = useState<number>();

  const [Number, SetNumber] = useState<number>(0);

  const handleClick = () => {
    SetNumber(Number + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.helo}> {name} Hello</Text>
      {/* <Text>{JSON.stringify(data)} Hello</Text> */}

      <View>
        <Button title="btn" onPress={() => handleClick()} />
        <Text> số nè {Number}</Text>

        <Text>Tên nè {name}</Text>
        <TextInput
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 100,
            height: 40,
          }}
          onChangeText={(value) => SetName(value)}
        />

<Text>Tuổi {age}</Text>

        <TextInput
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 100,
            height: 40,
            
          }}
          keyboardType="numeric"
          maxLength={2}
          onChangeText={(value) => SetAge(+value)}
        />
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

// css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  helo: {
    color: "blue",
    fontSize: 25,
    fontWeight: "bold",
    padding: 20,
  },
});
