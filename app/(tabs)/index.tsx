import { useRouter } from "expo-router";
import React from "react";
import { Alert, Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { MenuItem, useMenu } from "../../src/context/MenuContext"; // adjust path if needed

export default function HomeScreen() {
  const router = useRouter();
  const { menu, removeItem } = useMenu();
const handleRemove = (item: MenuItem) => {
    Alert.alert("Remove item", `Remove "${item.dish}" from the menu?`, [
      { text: "Cancel", style: "cancel" },
      { text: "Remove", style: "destructive", onPress: () => removeItem(item.id) },
    ]);
  };
  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.item}>
      <View style={{ flex: 1 }}>
        <Text style={styles.dish}>{item.dish}</Text>
        <Text style={styles.meta}>{item.course} • R{item.price}</Text>
        {item.description ? <Text style={styles.desc}>{item.description}</Text> : null}
      </View>
      <TouchableOpacity onPress={() => handleRemove(item)} style={styles.removeBtn}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Christoffel Menu</Text>

      <FlatList
        data={menu}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={{ textAlign: "center", marginTop: 20 }}>No menu items yet.</Text>}
      />

      <Text style={styles.total}>Total items: {menu.length}</Text>

      <View style={styles.buttonRow}>
        <Button title="Add Menu Item" onPress={() => router.push("/add-item")} />
        <Button title="Filter Menu" onPress={() => router.push("/filter")} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, paddingTop: 30 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12, textAlign: "center" },
  item: { flexDirection: "row", padding: 12, backgroundColor: "#fff", borderRadius: 8, marginBottom: 10, elevation: 1 },
  dish: { fontSize: 16, fontWeight: "600" },
  meta: { color: "#666", marginTop: 4 },
  desc: { marginTop: 6, color: "#444" },
  removeBtn: { justifyContent: "center", paddingHorizontal: 8 },
  removeText: { color: "crimson" },
  total: { marginTop: 8, fontWeight: "600", textAlign: "center" },
  buttonRow: { flexDirection: "row", justifyContent: "space-around", marginTop: 14 },
});