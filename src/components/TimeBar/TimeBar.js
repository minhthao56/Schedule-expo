import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

export default function TimeBar() {
  const dataDay = [1, 2, 3, 4, 5, 6, 0];
  const now = new Date().getDay();
  return (
    <View style={styles.container}>
      {dataDay.map((day, i) => {
        return (
          <Text style={day === now ? styles.now : styles.day} key={i}>
            {moment().day(day).format("ddd")}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 0.5,
    borderBottomColor: "#cccccc",
  },
  now: {
    backgroundColor: "#E24040",
    color: "white",
    padding: 12,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  day: {
    padding: 12,
  },
});
