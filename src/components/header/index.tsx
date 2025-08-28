import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import colors from './style';

export default function Header() {
  const navigation = useNavigation();
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
      paddingTop: 50,
      padding: 10,
      backgroundColor: 'black',
      justifyContent: 'center', // Centraliza os itens horizontalmente
      position: 'relative', // Permite posicionar o botão do menu
    },
    title: {
      color: colors.white,
      fontSize: 28,
      textAlign: 'center',
      flex: 1, // Ocupa o espaço disponível
    },
    icon: {
      fontSize: 18,
      color: colors.white,
    },
    menuButton: {
      position: 'absolute',
      left: 10,
      top: 50,
      zIndex: 1,
    },
  })