import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert, StyleSheet } from "react-native";
import { StripeProvider, usePaymentSheet } from "@stripe/stripe-react-native";
import PaymentService from "../../models/service/PaymentService";

export default function Cart() {
  const [valor, setValor] = useState("5000"); // valor em centavos
  const [mensagem, setMensagem] = useState("");
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const paymentService = new PaymentService();

  // Hook do Stripe
  const { initPaymentSheet, presentPaymentSheet, loading } = usePaymentSheet();

  // Função para resetar o estado e permitir novo pagamento
  const resetPayment = () => {
    setPaymentIntentId(null);
    setClientSecret(null);
    setMensagem("");
  };

  //

  // PASSO 1: Criar PaymentIntent no backend
  const initializePayment = async () => { //inicia o pagamento
    setMensagem("Criando pagamento...");

    try {
      const result = await paymentService.paymentIntent(Number(valor));

      // Armazena ID (para backend) e client_secret (para Stripe)
      setPaymentIntentId(result.id);
      setClientSecret(result.client_secret);

      // Inicializa o Payment Sheet
      const { error } = await initPaymentSheet({ //cria a parte de colocar os dados do cartão
        paymentIntentClientSecret: result.client_secret,
        merchantDisplayName: "Minha Loja",
        allowsDelayedPaymentMethods: true,
        //appearance: { colors: { primary: "#6366f1" } }, // opcional
      });

      if (error) {
        setMensagem(`Erro ao iniciar: ${error.message}`);
        resetPayment(); // Reseta em caso de erro
        return;
      }

      setMensagem("Toque em Pagar para continuar");
    } catch (err: any) {
      console.error("Erro ao criar PaymentIntent:", err);
      setMensagem(`Erro: ${err.message || "Falha na comunicação"}`);
      resetPayment(); // Reseta em caso de erro
    }
  };

  // PASSO 2: Abrir modal e confirmar pagamento
  const processPayment = async () => {
    if (!clientSecret || !paymentIntentId) {
      setMensagem("Pagamento não inicializado.");
      return;
    }

    const { error } = await presentPaymentSheet();

    if (error) {
      setMensagem(`Pagamento cancelado: ${error.message}`);
      // Reseta para permitir nova tentativa
      resetPayment();
    } else {
      try {
        await paymentService.confirmPayment(paymentIntentId);
        setMensagem("Pagamento realizado e salvo com sucesso!");
        Alert.alert("Sucesso", "Seu pagamento foi concluído com êxito!", [
          {
            text: "OK",
            onPress: () => resetPayment(), // Reseta ao fechar o Alert
          },
        ]);

        // Alternativa: resetar automaticamente após 2 segundos
        // setTimeout(() => {
        //   resetPayment();
        // }, 2000);
      } catch (err: any) {
        console.error("Erro ao salvar no backend:", err);
        setMensagem("Pagamento OK, mas erro ao salvar no sistema.");
        // Reseta mesmo com erro no backend (pagamento já foi processado)
        setTimeout(() => {
          resetPayment();
        }, 3000);
      }
    }
  };

  return (
    <StripeProvider
      publishableKey="pk_test_51SOM3OEw0KIUMOOXtWJTR6YsxelfAyvHpl4QCyGaX6ixikcRzgraFHoZA3sKJ79dIo5VJsJ8kiDxQ2zonnNVUdOs00IhUDLiI3"
      merchantIdentifier="merchant.com.sualoja" // iOS Apple Pay
    >
      <View style={styles.container}>
        <Text style={styles.title}>Pagamento com Stripe</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Valor em centavos (ex: 5000 = R$50,00)"
          value={valor}
          onChangeText={setValor}
        />

        {/* Botão para criar PaymentIntent */}
        <View style={styles.buttonContainer}>
          <Button
            title="Iniciar Pagamento"
            onPress={initializePayment}
            disabled={loading || !!clientSecret}
            color="#6366f1"
          />
        </View>

        {/* Botão para abrir o modal do cartão */}
        {clientSecret && (
          <View style={styles.buttonContainer}>
            <Button
              title="Pagar Agora"
              onPress={processPayment}
              disabled={loading}
              color="#10b981"
            />
          </View>
        )}

        {/* Botão para cancelar/resetar (opcional) */}
        {clientSecret && (
          <View style={styles.buttonContainer}>
            <Button
              title="Cancelar Pagamento"
              onPress={resetPayment}
              disabled={loading}
              color="#ef4444"
            />
          </View>
        )}

        {/* Mensagem de status */}
        <Text style={styles.message}>{mensagem}</Text>
      </View>
    </StripeProvider>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111827", // gray-900
    padding: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
    width: 280,
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
  buttonContainer: {
    width: 280,
    marginBottom: 12,
  },
  message: {
    color: "#FFFFFF",
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
    minHeight: 24,
    paddingHorizontal: 16,
  },
});
