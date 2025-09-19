import { Text, View } from "react-native";
import colors from "../../components/colors/style";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Promo from "../../components/promo";
import { StyleSheet } from "react-native";
import Promo3 from "@/src/components/promo3";
import Promo2 from "@/src/components/promo2";

export default function ProdutosPrincipal() {
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: colors.black,
        }}
      >
        <View style={styles.container}>
          <View style={styles.containerText}>
            <Text style={styles.text}>Home</Text>
            <Promo urlImage={""} />
          </View>

          
          <View style ={styles.container5}>
          <View style={styles.container4}>
            <Text style={styles.text3}>Seu projeto no lugar certo</Text>
            <Text style={styles.text3}>para crescer.</Text>
            </View>
          </View>

          <View style={styles.containerText2}>
            <Text style={styles.text2}>Clientes satisfeitos</Text>
            <Text style={styles.text4}>Depoimento de clientes que confiam</Text>
          </View>

          <View style={styles.container3}>

            <View style={styles.container2}>
            </View>

            <View style={styles.container2}>
            </View>

            <View style={styles.container2}>
            </View>
          
          </View>

          <View style={styles.containerText2}>
            <Text style={styles.text}>Visite nosso site</Text>
          </View>

          

          <View style={styles.containerMaster}>
          <Text style={styles.textMaster}>Hospedagem de Sites</Text>
            <Promo3 urlImage={""} />
          </View>

          <View style={styles.containerMaster2}>
            <Text style={styles.textMaster2}>Painel de VPS</Text>
            <Promo2 urlImage={""} />
          </View>


          

        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
  },
  
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 16,
  },

  text2: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 16,
  },

  text3: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 16,
  },

  text4: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 8,
  },

  containerText: {
    flex: 1,
    alignItems: "center",
  },

  containerText2: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },

  container2: {
    width: 100,
    height: 100,
    backgroundColor: colors.gray[800],
    borderRadius: 8,
  },

  container3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  container4: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
      width: 380,
      height: 200,
      backgroundColor: colors.gray[800],
      borderRadius: 8,
  },

  container5: {
    marginTop: 40,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },
  container6: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 450,
    backgroundColor: colors.gray[800],
  },

  containerMaster: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 30,
    width: 250,
    height: 250,
    
  },

  containerMaster2: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 30,
    width: 250,
    height: 250,
  },

  textMaster: {
    marginTop: 20,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",

  },

  textMaster2: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 20,
    marginTop: 20,

  },

});
