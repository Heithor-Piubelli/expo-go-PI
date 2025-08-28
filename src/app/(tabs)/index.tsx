import { View, ScrollView } from "react-native";
import React from "react";
import ProductList from "../../components/produtoList";
import colors from "../../components/colors/style";


export default function Index() {
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
          <ProductList/>
      </View>
    </>
  );
}
