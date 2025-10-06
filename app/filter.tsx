import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useMenu } from "../src/context/MenuContext";

export default function FilterScreen() {
  const { menu } = useMenu();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? menu : menu.filter((i) => i.course === filter);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>
       <View style={styles.imageRow}>
        <Image
          source={require("../assets/images/salads.jpg")} //  Image 1
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={require("../assets/images/soup.jpg")} //  Image 2
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Picker
        selectedValue={filter}
        onValueChange={setFilter}
        style={styles.input}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      {/*Reset Filter button */}
      <TouchableOpacity style={styles.button} onPress={() => setFilter("All")}>
        <Text style={styles.buttonText}>Reset Filter</Text>
      </TouchableOpacity>

      <FlatList
        data={filtered}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.dish}>{item.dish}</Text>
            <Text>
              {item.course} • R{item.price}
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text>No items found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
   imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  image: {
    width: "48%",  // two images side by side
    height: 120,
    borderRadius: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    borderRadius: 6,
  },
  item: {
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 6,
    borderRadius: 6,
  },
  dish: { fontWeight: "600" },

  // Consistent button
  button: {
    backgroundColor: "#D7903F", //  button color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 35, //  roundness
    alignItems: "center",
    minWidth: 120,
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff", //  text color
    fontWeight: "600",
    textAlign: "center",
  },
});
