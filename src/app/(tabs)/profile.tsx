import { Text, View } from "react-native";
import colors from "../../components/colors/style";
import React from "react";

export default function Profile() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.gray[800],
        }}
      >
        <Text style={{ color: colors.white }}>Profile</Text>
      </View>
    </>
  );
}
