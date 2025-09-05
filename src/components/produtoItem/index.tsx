import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import colors from "../header/style";
import { router } from "expo-router";

export interface Produtos {
  id: string;
  plano: string;
  descricao: string;
  quantidade: number;
  preco: number;
  categoria: number;
}

export const ProductItem: React.FC<Produtos> = ({
  id,
  plano,
  descricao,
  quantidade,
  preco,
  categoria,



}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.productItem}
        onPress={() =>
          router.push({
            pathname: "/productDetail/[id]",
            params: { id: id },
          })
        }
      >
        <Text style={styles.text}>Plano: {plano}</Text>
        <Text style={styles.text}>Descrição: {descricao}</Text>
        <Text style={styles.text}>Quantidade: {quantidade}</Text>
        <Text style={styles.text}>Preço: R$ {preco.toFixed(2)}</Text>
        {categoria == 2?<Text style={styles.text}>Categoria: Web</Text> : <Text style={styles.text}>Categoria: VPS</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  productItem: {
    backgroundColor: colors.gray[200], // cor mais clara para melhor contraste
    padding: 20,
    width: 320,
    borderRadius: 12,
    marginBottom: 16,

    // sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // elevação para Android
    elevation: 3,
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
    color: "#333",
    fontWeight: "500",
  },
});
