import React from "react";
import { View, Text, StyleSheet, Animated  } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { Feather } from "@expo/vector-icons";


export default function CardSubject() {

    
const opacity = new Animated.Value(0);
Animated.timing(opacity, {
  toValue: 1,
  duration: 500
}).start();


  return (
    <View style={styles.container}>
      <Text style={styles.number}>1</Text>
      <Collapse style={styles.collapse}>
        <CollapseHeader>
          <View style={styles.header}>
            <Feather name="book" size={22} color="#aaaaaa" />
            <Text>Click here</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={styles.collapseBody}>
          <Text>Ta daa!</Text>
        </CollapseBody>
      </Collapse>
    </View>
  );
}

const styles = StyleSheet.create({
  collapse: {
    width: "65%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 8,
  },
  container: {
    alignItems: "center",
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    fontSize: 30,
    color: "#E24040",
    marginRight: 12,
  },
  collapseBody: {
    height: 300,
  },
});
