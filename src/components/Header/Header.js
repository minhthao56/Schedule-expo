import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.years}>Năm học 2019 - 2020</Text>
      <Text style={styles.title}>Schedule</Text>
      <Text style={styles.subTitle}>Try to do something you want</Text>
      <Feather name="sun" size={32} color="white" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#E24040",
  },
  title: {
    fontSize: 32,
    color: "white",
  },
  subTitle: {
    fontStyle: "italic",
    fontSize: 13,
    color: "white",
  },
  years: {
    color: "white",
  },
  icon: {
    textAlign: "right",
  },
});
