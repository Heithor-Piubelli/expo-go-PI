import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import produtosApi from "@/src/produtosApi/produtosApi";

export default function ProductDetails() {
    const { id } = useLocalSearchParams();
    const produto = produtosApi.find((p) => p.id === id);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          produto ? (
            <View>
              <Text>Plano: {produto.plano}</Text>
              <Text>Descrição: {produto.descricao}</Text>
              <Text>Quantidade: {produto.quantidade}</Text>
              <Text>Preço: ${produto.preco}</Text>
              <Text>Categoria: {produto.categoria}</Text>
            </View>

          ): (
            <Text>Produto não encontrado</Text>
          )
        }
      </View>
  );
}
