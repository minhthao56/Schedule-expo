import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import Accordion from "react-native-collapsible/Accordion";

const SECTIONS = [
  {
    title: "History",
    content:
      "Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... ",
  },
  {
    title: "Gygeophy",
    content:
      "Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... ",
  },
  {
    title: "Math",
    content:
      "Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... ",
  },
  {
    title: "Phycical",
    content:
      "Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... ",
  },
  {
    title: "Biocal",
    content:
      "Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... ",
  },
];

export default function CardSubject() {
  const [activeSections, setActiveSections] = useState([]);
  const [valueNote, setValuaNote] = useState("");
  const _renderHeader = (section, index) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 20, color: "#E24040" }}>{index + 1}. </Text>
        <Feather name="book" size={16} color="#888888" />
        <Text style={{ fontSize: 16, color: "#888888" }}>{section.title}</Text>
      </View>
    );
  };

  const _renderContent = (section) => {
    return (
      <View>
        {/* <Text>{section.content}</Text> */}
        <TextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => setValuaNote({ text })}
          value={valueNote}
          placeholder="Note..."
        />
      </View>
    );
  };

  const _updateSections = (activeSections) => {
    setActiveSections(activeSections);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerAccordion}>
        <Accordion
          sections={SECTIONS}
          activeSections={activeSections}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
          onChange={_updateSections}
          sectionContainerStyle={styles.accordion}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accordion: {
    marginBottom: 8,
    borderRadius: 30,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16,
    marginTop: 16,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  containerAccordion: {
    width: "75%",
  },
});
