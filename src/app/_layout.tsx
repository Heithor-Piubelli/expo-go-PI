import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { Drawer } from "expo-router/drawer";
import React from "react";
import Header from "../components/header";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "../components/header/style";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          header: () => <Header />,
          drawerActiveTintColor: colors.white,
          drawerInactiveTintColor: colors.gray[400],
          drawerStyle: {
            backgroundColor: colors.gray[800],
            width: 240,
          },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <Entypo name="home" size={28} color="gray" />
            ),
          }}
        />

        <Drawer.Screen
          name="productDetail/[id]"
          options={{
            title: "Produtos",
            drawerIcon: ({ color, size }) => (
              <Entypo name="box" size={28} color="gray" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    padding: 50,
    backgroundColor: colors.gray[800],
    justifyContent: "space-between",
  },

  icon: {
    marginRight: 10,
  },

  title: {
    color: "#fff",
    fontSize: 20,
  },
});
