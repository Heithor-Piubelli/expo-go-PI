import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import colors from './style';
import { useFonts } from '@expo-google-fonts/changa-one/useFonts';
import { ChangaOne_400Regular } from '@expo-google-fonts/changa-one/400Regular';
import { ChangaOne_400Regular_Italic } from '@expo-google-fonts/changa-one/400Regular_Italic';

export default function Header() {
  const navigation = useNavigation();
  
  let [fontsLoaded] = useFonts({
    ChangaOne_400Regular, 
    ChangaOne_400Regular_Italic
  });

  if (!fontsLoaded) {
    return null; // Ou um componente de carregamento

  }

  return (
    <View style={styles.container}>

          <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer());}}>
            <Entypo name="menu" size={40} color="white"/>
          </TouchableOpacity>
        <Text style={styles.title}>Seven</Text>

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 20,
      padding: 10,
      backgroundColor: colors.gray[800],
      justifyContent: 'center', // Centraliza os itens horizontalmente
      height: 80,
    },
    title: {
      color: colors.white,
      fontSize: 26,
      textAlign: 'center',
      flex: 1, // Ocupa o espaço disponível
      fontFamily: 'ChangaOne_400Regular',
    },
    icon: {
      fontSize: 12,
      color: colors.white,
    },
    menuButton: {
      position: 'absolute',
      left: 10,
      top: 50,
      zIndex: 1,
    },
  })