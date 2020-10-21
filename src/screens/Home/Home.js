import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Header, TimeBar } from "../../components";

export default function Home() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#E24040" />
      <Header />
      <TimeBar />
    </SafeAreaView>
  );
}
