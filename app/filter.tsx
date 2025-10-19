import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useMenu } from "../src/context/MenuContext";

export default function FilterScreen() {
  const router = useRouter();
  const { menu } = useMenu();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? menu : menu.filter((i) => i.course === filter);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Filter Menu</Text>

        {/*  Two images side by side */}
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/salads.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
          <Image
            source={require("../assets/images/soup.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Dropdown Picker */}
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

        {/*  Reset Filter button */}
        <TouchableOpacity style={styles.button} onPress={() => setFilter("All")}>
          <Text style={styles.buttonText}>Reset Filter</Text>
        </TouchableOpacity>

        {/*  Filtered Menu List */}
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
          ListEmptyComponent={<Text style={{ textAlign: "center" }}>No items found.</Text>}
        />

        {/*  Back to Home button */}
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
  //  Full Screen Container (Added border + color)
  container: {
    flex: 1,
    padding: 20,
    borderWidth: 5,
    borderColor: "#D7903F", // added border for consistency
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },

  //  Image Row
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  image: {
    width: "48%", // two images side by side
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

  //  Buttons
  button: {
    backgroundColor: "#D7903F",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    minWidth: 120,
    marginVertical: 10,
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
