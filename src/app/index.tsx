import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import FoodListItem from "@/components/FoodItemList";

const foodList = [
  {
    label: "Apple",
    cal: 95,
    brand: "Dole",
  },
  {
    label: "Banana",
    cal: 105,
    brand: "Dole",
  },
  {
    label: "Orange",
    cal: 62,
    brand: "Dole",
  },
  {
    label: "Peach",
    cal: 59,
    brand: "Dole",
  },
  {
    label: "Pineapple",
    cal: 50,
    brand: "Dole",
  },
  {
    label: "Strawberry",
    cal: 33,
    brand: "Dole",
  },
  {
    label: "Watermelon",
    cal: 30,
    brand: "Dole",
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      {/* FOOD item view*/}

      <FlatList
        data={foodList}
        renderItem={({ item }) => <FoodListItem item={item} />}
        contentContainerStyle={{ gap: 5 }}
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
