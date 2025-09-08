import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function AboutUsScreen() {
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
      
      {/* Header with back button */}
      <View style={styles.header}>
      
        <Text style={styles.title}>Sobre Nós</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Company Info Card */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons name="business-outline" size={32} color="#ffffff" />
          </View>
          <Text style={styles.cardTitle}>Nossa Empresa</Text>
          <Text style={styles.cardDescription}>
            Somos uma empresa inovadora focada em criar soluções tecnológicas que 
            transformam a experiência dos nossos usuários. Nossa missão é simplificar 
            o complexo e tornar a tecnologia mais acessível para todos.
          </Text>
        </View>

        {/* Mission Card */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons name="rocket-outline" size={32} color="#ffffff" />
          </View>
          <Text style={styles.cardTitle}>Nossa Missão</Text>
          <Text style={styles.cardDescription}>
            Desenvolver produtos digitais que conectam pessoas e facilitam o dia a dia, 
            sempre priorizando a experiência do usuário, inovação e qualidade em 
            cada detalhe do nosso trabalho.
          </Text>
        </View>

        {/* Values Card */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons name="heart-outline" size={32} color="#ffffff" />
          </View>
          <Text style={styles.cardTitle}>Nossos Valores</Text>
          <View style={styles.valuesList}>
            <Text style={styles.valueItem}>• Inovação constante</Text>
            <Text style={styles.valueItem}>• Transparência total</Text>
            <Text style={styles.valueItem}>• Foco no usuário</Text>
            <Text style={styles.valueItem}>• Qualidade sem compromisso</Text>
          </View>
        </View>

        {/* Team Card */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons name="people-outline" size={32} color="#ffffff" />
          </View>
          <Text style={styles.cardTitle}>Nossa Equipe</Text>
          <Text style={styles.cardDescription}>
            Contamos com uma equipe multidisciplinar de desenvolvedores, designers 
            e especialistas em experiência do usuário, todos unidos pelo mesmo 
            objetivo: criar produtos excepcionais.
          </Text>
        </View>

        {/* Contact Card */}
        <View style={[styles.card, styles.lastCard]}>
          <View style={styles.iconContainer}>
            <Ionicons name="mail-outline" size={32} color="#ffffff" />
          </View>
          <Text style={styles.cardTitle}>Entre em Contato</Text>
          <Text style={styles.cardDescription}>
            Tem alguma dúvida ou sugestão? Estamos sempre abertos ao diálogo.
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Fale Conosco</Text>
            <Ionicons name="arrow-forward-outline" size={16} color="#0a0a0a" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: height * 0.06,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    color: '#ffffff',
    letterSpacing: 1,
  },
  placeholder: {
    width: 40,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  lastCard: {
    marginBottom: 40,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  cardDescription: {
    fontSize: 16,
    color: '#888',
    lineHeight: 24,
    fontWeight: '300',
  },
  valuesList: {
    marginTop: 8,
  },
  valueItem: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
    fontWeight: '300',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 16,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  contactButtonText: {
    color: '#0a0a0a',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 8,
  },
});