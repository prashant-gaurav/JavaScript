import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [input, setInput] = React.useState();
  const [data, setData] = React.useState([]);
  const addData = (txt) => {
    setData([...data, input]);
    setInput("");
  };

  const deleteData = (i) => {
    const newData = data.splice(i, 1);
    setData(newData);
  };

  const search = (txt) => {
    //Error:  i was not returning any data
    const resultdata = data.filter((item) => item === txt).map((item) => item);
    if (resultdata.length !== 0) {
      setData(resultdata);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Todo App</Text>
      <TextInput style={styles.input} onChangeText={(d) => search(d)} />
      {data &&
        data.length !== 0 &&
        data.map((d, i) => (
          <TouchableOpacity key={i} onPress={() => deleteData(i)}>
            <Text>{d}</Text>
          </TouchableOpacity>
        ))}
      <TextInput
        style={styles.input}
        onChangeText={(e) => setInput(e)}
        onSubmitEditing={() => addData()}
        value={input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    margin: 24,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  },
  input: {
    height: 40,
    minWidth: 100,
    borderWidth: 5,
    backgroundColor: "red"
  }
});
