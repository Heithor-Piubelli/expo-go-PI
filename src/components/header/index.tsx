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
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: colors.gray[800],
    height: 100,
    position: 'relative',
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontFamily: 'ChangaOne_400Regular',
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    justifyContent:'center'
  },
});

// Fim do arquivo
