import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { ProdutosI } from "@/src/types/produtos";
import ProductItem from "../produtoItem";
// import produtosApi from "@/src/produtosApi/produtosApi";

export default function ProductList() {
  const [produtosApi, setProdutosApi] = React.useState<ProdutosI[]>([]);

  React.useEffect(() => {
    // Função que faz a requisição à API
    const fetchData = async () => {
      try {
        const response = await fetch("http://10.63.48.45:8080/produtos");
        const json = await response.json();

        // Verifica se o status é sucesso e extrai os dados
        if (json.status === "success" && Array.isArray(json.data)) {
          setProdutosApi(json.data);
          console.log("API OK");
        } else {
          console.error("Erro na estrutura dos dados:", json);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos Web</Text>
      <FlatList
        data={produtosApi}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id_produtos}
        renderItem={({ item }) =>
          item.categoria == 2 ? (
            <ProductItem
              id_produtos={item.id_produtos}
              plano={item.plano}
              descricao={item.descricao}
              quantidade={item.quantidade}
              preco={item.preco}
              categoria={item.categoria}
            />
          ) : null
        }
      />

      <Text style={styles.title}>Produtos VPS</Text>
      <FlatList
        data={produtosApi}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id_produtos}
        renderItem={(item) =>
          item.item.categoria == 1 ? (
            <ProductItem
              id_produtos={item.item.id_produtos} //coloquei item.item.id_produtos pq estava dando erro pq é um objeto dentro de outro
              plano={item.item.plano}
              descricao={item.item.descricao}
              quantidade={item.item.quantidade}
              preco={item.item.preco}
              categoria={item.item.categoria}
            />
          ) : null
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
