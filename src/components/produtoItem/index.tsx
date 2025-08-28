import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import colors from "../header/style";
import { router } from "expo-router";


interface Produtos {
  id: string;
  plano: string;
  descricao: string;
  quantidade: number;
  preco: number;
  categoria: string;
}


const ProductItem: React.FC<Produtos> = ({ id, plano, descricao, quantidade, preco, categoria }) => {
  return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.productItem}
          onPress={() => router.push({
            pathname: "/productDetail/[id]",
            params: { id: id },
          })}
        >
          <Text>Plano: {plano}</Text>
          <Text>Descrição: {descricao}</Text>
          <Text>Quantidade: {quantidade}</Text>
          <Text>Preço: {preco}</Text>
          <Text>Categoria: {categoria}</Text>
        </TouchableOpacity>
      </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
  
  },
  productItem: {
    backgroundColor: colors.gray[500],
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});
