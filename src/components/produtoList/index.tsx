import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductItem, { Produtos } from "../produtoItem";
import React from "react";
import produtosApi from "@/src/produtosApi/produtosApi";




export default function ProductList() {
   

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Produtos Web</Text>
      <FlatList
        data={produtosApi}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          item.categoria == 2)?
          <ProductItem
            id={item.id}
            plano={item.plano}
            descricao={item.descricao}
            quantidade={item.quantidade}
            preco={item.preco}
            categoria={item.categoria}
          /> : null
        
      
      
      }
      />

      <Text style={styles.title}>Produtos VPS</Text>
      <FlatList
        data={produtosApi}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          item.item.categoria == 1)?
          <ProductItem
            id={item.item.id} //coloquei item.item.id pq estava dando erro pq é um objeto dentro de outro
            plano={item.item.plano}
            descricao={item.item.descricao}
            quantidade={item.item.quantidade}
            preco={item.item.preco}
            categoria={item.item.categoria}
          /> : null
        
      
      
      }
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
