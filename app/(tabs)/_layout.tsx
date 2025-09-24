import { Stack } from "expo-router";
import React from "react";
// the import path for MenuContext
import { MenuProvider } from "../../src/context/MenuContext";


export default function Layout() {
  return (
    <MenuProvider>
      <Stack screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="add-item" options={{ title: "Add Item" }} />
        <Stack.Screen name="filter" options={{ title: "Filter Menu" }} />
      </Stack>
    </MenuProvider>
  );
}
