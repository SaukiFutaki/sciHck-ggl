import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Welcome to React </Text>
      <Link href="/dashboard">Go to Dashboard</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
});
