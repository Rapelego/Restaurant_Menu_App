import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Add New Menu Item</Text>


        <Text style={styles.label}>Dish Name</Text>
        <TextInput
          style={styles.input}
          value={dish}
          onChangeText={setDish}
          placeholder="Enter dish name"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter description"
        />

        <Text style={styles.label}>Course</Text>
        <Picker
          selectedValue={course}
          onValueChange={setCourse}
          style={styles.input}
        >
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main" value="Main" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>

        <Text style={styles.label}>Price (R)</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          placeholder="Enter price"
        />

        <TouchableOpacity style={styles.button} onPress={save}>
          <Text style={styles.buttonText}>Save Item</Text>
        </TouchableOpacity>

        {/* 🏠 Back to Home Button */}
        <TouchableOpacity
          style={[styles.button, styles.secondary]}
          onPress={() => router.push("/")}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderWidth: 5,
    borderColor: "#D7903F",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  headerImage: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
  label: {
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 14,
    borderRadius: 8,
  },

  // Buttons
  button: {
    backgroundColor: "#D7903F",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    minWidth: 120,
    marginTop: 10,
  },
  secondary: {
    backgroundColor: "#D7903F",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});
