import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import produtosApi from "@/src/produtosApi/produtosApi";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const produto = produtosApi.find((p) => p.id === id);

  return (
    <View style={styles.container}>
      {produto ? (
        <View style={styles.card}>
          <Text style={styles.title}>Detalhes do Produto</Text>
          <Text style={styles.text}>Plano: {produto.plano}</Text>
          <Text style={styles.text}>Descrição: {produto.descricao}</Text>
          <Text style={styles.text}>Quantidade: {produto.quantidade}</Text>
          <Text style={styles.text}>Preço: R$ {produto.preco}</Text>
          <Text style={styles.text}>Categoria: {produto.categoria}</Text>
        </View>
      ) : (
        <Text style={styles.text}>Produto não encontrado</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2A44',
    paddingHorizontal: 16,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
});
