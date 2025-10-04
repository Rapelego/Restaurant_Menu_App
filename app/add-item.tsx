import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useMenu } from "../src/context/MenuContext";

export default function AddItemScreen() {
  const router = useRouter();
  const { addItem } = useMenu();

  const [dish, setDish] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starter");
  const [price, setPrice] = useState("");

  const save = () => {
    if (!dish || !price) {
      Alert.alert("Error", "Dish and Price are required");
      return;
    }
    addItem({ dish, description, course, price });
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text>Dish Name</Text>
      <TextInput style={styles.input} value={dish} onChangeText={setDish} />

      <Text>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />

      <Text>Course</Text>
      <Picker selectedValue={course} onValueChange={setCourse} style={styles.input}>
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <Text>Price (R)</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" />

      {/* <Button title="Save Item" onPress={save} /> */} 
      <TouchableOpacity style={styles.button} onPress={save}>
  <Text style={styles.buttonText}>Save Item</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 12,
    borderRadius: 6,
  },

  //  button
  button: {
    backgroundColor: "#D7903F",  //  button color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 35,            //  roundness
    alignItems: "center",
    minWidth: 120,
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",               //  text color
    fontWeight: "600",
    textAlign: "center",
  },
});