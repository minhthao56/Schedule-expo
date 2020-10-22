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
          <View style={day === now ? styles.now : styles.time} key={i}>
            <Text style={day === now ? styles.dateNow : styles.date}>
              {moment().day(day).format("MM/DD")}
            </Text>
            <Text style={day === now ? styles.dayNow : styles.day}>
              {moment().day(day).format("ddd")}
            </Text>
          </View>
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
    borderBottomColor: "#eeeeee",
  },
  now: {
    backgroundColor: "#E24040",
    padding: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  time: {
    padding: 8,
  },
  date: {
    textAlign: "center",
    fontSize: 11,
    marginBottom: 3,
    fontWeight: "700",
  },
  dateNow: {
    color: "white",
    textAlign: "center",
    fontSize: 11,
    marginBottom: 2,
    fontWeight: "700",
  },
  day: {
    textAlign: "center",
  },
  dayNow: {
    color: "white",
    textAlign: "center",
  },
});
