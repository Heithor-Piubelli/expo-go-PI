import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
 
WebBrowser.maybeCompleteAuthSession();
 
export const LoginGoogle: React.FC = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    
webClientId: "813708163785-pfquk8mcg2933kie8bue4h1c0fg29qrq.apps.googleusercontent.com",

androidClientId: "813708163785-pfquk8mcg2933kie8bue4h1c0fg29qrq.apps.googleusercontent.com",
  });
 
  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("googleAccessToken", authentication?.accessToken);
 
      if (authentication?.accessToken) {
        (async () => {
          try {
            const res = await fetch(
              "https://www.googleapis.com/ouath2/v3/useinfo",
              {
                headers: {
                  Authorization: `Bearer ${authentication.accessToken}`,
                },
              }
            );
            if (!res.ok) throw new Error("Failed to fetch user info");
            const userInfo = await res.json();
            const { name, email, picture } = userInfo;
            console.log("User Info:", { name, email, picture });
          } catch (error) {
            console.error("Failed to fetch user info", error);
          }
        })();
      }
    }
  }, [response]);
 
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            promptAsync();
          }}
          disabled={!request}
        >
          <AntDesign name="google" size={24} color="#EA4335" />
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dadce0",
  },
  buttonText: {
    color: "#757575",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 12,
  },
});









// webClientId: "813708163785-pfquk8mcg2933kie8bue4h1c0fg29qrq.apps.googleusercontent.com",

// androidClientId: "813708163785-pfquk8mcg2933kie8bue4h1c0fg29qrq.apps.googleusercontent.com",