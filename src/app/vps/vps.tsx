import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductItem, { Produtos } from "../../components/produtoItem";
import React from "react";
import produtosApi from "@/src/produtosApi/produtosApi";
import TabLayout from "../(tabs)/_layout";

export default function Vps() {
  return (//alteracao
    <View style={styles.container}>
      <Text style={styles.title}>Produtos VPS</Text>
      <FlatList
        data={produtosApi.filter((item) => item.categoria === 1)} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <ProductItem
              id={item.id}
              plano={item.plano}
              descricao={item.descricao}
              quantidade={item.quantidade}
              preco={item.preco}
              categoria={item.categoria}
            />
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2A44',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    marginBottom: 16,
  },
});
