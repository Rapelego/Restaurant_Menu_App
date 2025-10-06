import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { MenuItem, useMenu } from "../src/context/MenuContext";

export default function HomeScreen() {
  const router = useRouter();
  const { menu, removeItem } = useMenu();

  // Ask before removing
  const handleRemove = (item: MenuItem) => {
    Alert.alert("Remove item", `Remove "${item.dish}"?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Remove",
        style: "destructive",
        onPress: () => removeItem(item.id),
      },
    ]);
  };

  // Render each menu item
  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.item}>
      <View style={{ flex: 1 }}>
        <Text style={styles.dish}>{item.dish}</Text>
        <Text style={styles.meta}>
          {item.course} • R{item.price}
        </Text>
        {item.description ? (
          <Text style={styles.desc}>{item.description}</Text>
        ) : null}
      </View>
      <TouchableOpacity onPress={() => handleRemove(item)}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Christoffel's Menu</Text>
       <Image
        source={require("../assets/images/Spaghetti.jpg")}
        style={styles.headerImage}
        resizeMode="cover"
      />
      <FlatList
        data={menu}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            No menu items yet.
          </Text>
        }
      />

      <Text style={styles.total}>Total items: {menu.length}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/add-item")}
        >
          <Text style={styles.buttonText}>Add Menu Item</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondary]}
          onPress={() => router.push("/filter")}
        >
          <Text style={styles.buttonText}>Filter Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, paddingTop: 30 },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },

 headerImage: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginBottom: 15,
    alignSelf: "center",
  },

  item: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
    alignItems: "center",
  },

  dish: { fontSize: 16, fontWeight: "600" },
  meta: { color: "#666", marginTop: 4 },
  desc: { marginTop: 6, color: "#444" },
  removeText: { color: "crimson", marginLeft: 10 },
  total: { marginTop: 8, fontWeight: "600", textAlign: "center" },
  //  Buttons
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 14,
  },

  button: {
    backgroundColor: "#D7903F", //  button background color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 35, //  corner roundness
    alignItems: "center",
    minWidth: 120,
  },

  secondary: {
    backgroundColor: "#D7903F", //second button color
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});
