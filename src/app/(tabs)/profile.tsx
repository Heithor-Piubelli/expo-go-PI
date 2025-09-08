import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../components/colors/style";
import React from "react";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2gtOadQLuabu1vsEGgLDzxBsUAMY5g7RkA&s",
        }}
      />

      <Text style={styles.text}>Teste da silva</Text>
      <Text style={styles.text}>teste@gmail.com</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}><Text style={styles.label}>Nome:</Text> Teste da Silva</Text>
        <Text style={styles.cardText}><Text style={styles.label}>Email:</Text> teste@gmail.com</Text>
        <Text style={styles.cardText}><Text style={styles.label}>Data de Nascimento:</Text> 01/01/1990</Text>
        <Text style={styles.cardText}><Text style={styles.label}>Documento:</Text> 123.456.789-00</Text>
        <Text style={styles.cardText}><Text style={styles.label}>Celular:</Text> (11) 91234-5678</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[800],
    alignItems: "center",
    paddingTop: 30,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: "white",
    marginBottom: 5,
  },
  card: {
    backgroundColor: colors.gray[700] || "#2D3748",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    marginTop: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    color: "#CBD5E0",
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: "#E53E3E", // vermelho forte
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
