// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   Dimensions,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { router } from "expo-router";
// import ClientService from "@/models/services/ClientService";
// import { User } from "@/models/types/User";

// const { width, height } = Dimensions.get("window");
// const clientService = new ClientService();

// export default function CreateCountScreen() {
//   const [nome, setNome] = useState("");
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");

//   const handleRegister = async () => {
//     try {
//       const novoCliente: User = {
//         nome,
//         email,
//         senha,
//       };
//       await clientService.create(novoCliente);
//       console.log("Conta criada com sucesso");
//       router.push("/");
//     } catch (error) {
//       console.log("Erro ao criar conta:", error);
//     }
//   };




//   const handleForgotPassword = () => {
//     console.log("Forgot senha pressed");
//     // Aqui você implementaria a navegação para tela de recuperação
//   };

  

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />

//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.title}>Criar conta</Text>
//         <Text style={styles.subtitle}>Crie sua Conta</Text>
//       </View>

//       {/* Form Container */}
//       <View style={styles.formContainer}>
//         {/* Email Input */}
//         <View style={styles.inputContainer}>
//           <View style={styles.inputWrapper}>
//             <Ionicons
//               name="mail-outline"
//               size={20}
//               color="#666"
//               style={styles.inputIcon}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Nome"
//               placeholderTextColor="#666"
//               value={nome}
//               onChangeText={setNome}
//               autoCapitalize="none"
//             />
//           </View>
//         </View>

//         {/* Password Input */}
//         <View style={styles.inputContainer}>
//           <View style={styles.inputWrapper}>
//             <Ionicons
//               name="lock-closed-outline"
//               size={20}
//               color="#666"
//               style={styles.inputIcon}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               placeholderTextColor="#666"
//               value={email}
//               onChangeText={setEmail}
//               secureTextEntry={!nome}
//               autoCapitalize="none"
//             />
//           </View>
//         </View>
//         <View style={styles.inputContainer}>
//           <View style={styles.inputWrapper}>
//             <Ionicons
//               name="lock-closed-outline"
//               size={20}
//               color="#666"
//               style={styles.inputIcon}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Senha"
//               placeholderTextColor="#666"
//               value={senha}
//               onChangeText={setSenha}
//               secureTextEntry={!nome}
//               autoCapitalize="none"
//             />
//           </View>
//         </View>

//         {/* Login Button */}
//         <TouchableOpacity
//           style={styles.loginButton}
//           onPress={handleRegister}
//           activeOpacity={0.8}
//         >
//           <Text style={styles.loginButtonText}>Criar Conta</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.loginButton}
//           onPress={() => router.push("/")}
//           activeOpacity={0.8}
//         >
//           <Text style={styles.loginButtonText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000000ff",
//     paddingHorizontal: 24,
//     width: "100%",
//     height: "100%",
//   },
//   header: {
//     marginTop: height * 0.12,
//     marginBottom: height * 0.08,
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "300",
//     color: "#ffffff",
//     marginBottom: 8,
//     letterSpacing: 1,
//     fontFamily: "ChangaOne_400Regular",
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#888",
//     fontWeight: "300",
//   },
//   formContainer: {
//     flex: 1,
//   },
//   inputContainer: {
//     marginBottom: 24,
//   },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#3f3a3aff",
//     borderRadius: 16,
//     paddingHorizontal: 16,
//     paddingVertical: 4,
//     // Neomorphism shadow effect
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 8,
//       height: 8,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 16,
//     elevation: 8,
//     // Inner shadow effect (simulated with border)
//     borderWidth: 1,
//     borderColor: "#2a2a2a",
//   },
//   inputIcon: {
//     marginRight: 12,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "300",
//   },
//   eyeIcon: {
//     padding: 4,
//   },
//   optionsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 40,
//   },
//   rememberContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderRadius: 6,
//     borderWidth: 1,
//     borderColor: "#444",
//     backgroundColor: "#1a1a1a",
//     marginRight: 8,
//     alignItems: "center",
//     justifyContent: "center",
//     // Neomorphism effect
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 2,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   checkboxActive: {
//     backgroundColor: "#ffffff",
//     borderColor: "#ffffff",
//   },
//   rememberText: {
//     color: "#888",
//     fontSize: 14,
//     fontWeight: "300",
//   },
//   forgotText: {
//     color: "#ffffff",
//     fontSize: 14,
//     fontWeight: "300",
//   },
//   loginButton: {
//     backgroundColor: "#ffffff",
//     borderRadius: 16,
//     paddingVertical: 16,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   loginButtonText: {
//     color: "#0a0a0a",
//     fontSize: 18,
//     fontWeight: "500",
//     letterSpacing: 0.5,
//   },
// });
