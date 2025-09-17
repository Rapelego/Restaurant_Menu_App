import React from "react";
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useMenu, MenuItem } from "../../src/context/MenuContext"; // adjust path if needed

export default function HomeScreen() {
  const router = useRouter();
  const { menu, removeItem } = useMenu();
const handleRemove = (item: MenuItem) => {
    Alert.alert("Remove item", `Remove "${item.dish}" from the menu?`, [
      { text: "Cancel", style: "cancel" },
      { text: "Remove", style: "destructive", onPress: () => removeItem(item.id) },
    ]);
  };