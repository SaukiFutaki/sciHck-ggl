import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import FoodListItem from "@/components/FoodItemList";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* FOOD item view*/}
      <FoodListItem
        item={{
          label: "Apple",
          cal: 95,
          brand: "Dole",
        }}
      />
      <FoodListItem
        item={{
          label: "Banana",
          cal: 105,
          brand: "Dole",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
    gap: 7,
  },
});

