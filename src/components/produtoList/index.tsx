import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductItem from "../produtoItem";
import React from "react";
import produtosApi from "@/src/produtosApi/produtosApi";

export default function ProductList() {
  console.log(produtosApi);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>

      <FlatList
        data={produtosApi}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <ProductItem
            id={item.item.id}
            plano={item.item.plano}
            descricao={item.item.descricao}
            quantidade={item.item.quantidade}
            preco={item.item.preco}
            categoria={item.item.categoria}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
    marginTop: 0,
  },
});
