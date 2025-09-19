import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from "react";
import colors from "../../components/colors/style";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, //esconde o header
        // tabBarShowLabel: false, //esconde os icones

        tabBarActiveTintColor: colors.white, // cor do icone ativo
        tabBarInactiveTintColor: colors.gray[500], //cor do icone inativo
        tabBarShowLabel: true,

        tabBarStyle: {
          backgroundColor: colors.gray[800],
          borderTopWidth: 0,
          height: 100,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
          <Entypo name="home" size={28} color="black" />
          ),
        }}
      />
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="box" size={28} color="black" />
            ),
          }}
        />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="people-alt" size={28} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
