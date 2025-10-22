import React from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Promo from "../../components/promo";
import Promo2 from "@/src/components/promo2";
import Promo3 from "@/src/components/promo3";

const { width, height } = Dimensions.get('window');

export default function ProdutosPrincipal() {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Home</Text>
            <Text style={styles.heroSubtitle}>Bem-vindo à nossa plataforma</Text>
          </View>
          <View style={styles.promoContainer}>
            <Promo urlImage={""} />
          </View>
        </View>

        {/* Main CTA Section */}
        <View style={styles.ctaSection}>
          <View style={styles.ctaCard}>
            <View style={styles.ctaIconContainer}>
              <Ionicons name="rocket-outline" size={32} color="#ffffff" />
            </View>
            <Text style={styles.ctaTitle}>Seu projeto no lugar certo</Text>
            <Text style={styles.ctaTitle}>para crescer.</Text>
            <Text style={styles.ctaDescription}>
              Soluções completas para impulsionar seu negócio digital
            </Text>
          </View>
        </View>

        {/* Client Testimonials Section */}
        <View style={styles.testimonialsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Clientes Satisfeitos</Text>
            <Text style={styles.sectionSubtitle}>
              Depoimentos de clientes que confiam em nossos serviços
            </Text>
          </View>

          <View style={styles.testimonialsGrid}>
            <View style={styles.testimonialCard}>
              <View style={styles.avatarContainer}>
                <Ionicons name="person" size={24} color="#ffffff" />
              </View>
              <View style={styles.starsContainer}>
                {[1,2,3,4,5].map((star) => (
                  <Ionicons key={star} name="star" size={14} color="#FFD700" />
                ))}
              </View>
              <Text style={styles.testimonialText}>
                "Excelente serviço e suporte técnico impecável."
              </Text>
            </View>

            <View style={styles.testimonialCard}>
              <View style={styles.avatarContainer}>
                <Ionicons name="person" size={24} color="#ffffff" />
              </View>
              <View style={styles.starsContainer}>
                {[1,2,3,4,5].map((star) => (
                  <Ionicons key={star} name="star" size={14} color="#FFD700" />
                ))}
              </View>
              <Text style={styles.testimonialText}>
                "Hospedagem confiável com ótimo custo-benefício."
              </Text>
            </View>

            <View style={styles.testimonialCard}>
              <View style={styles.avatarContainer}>
                <Ionicons name="person" size={24} color="#ffffff" />
              </View>
              <View style={styles.starsContainer}>
                {[1,2,3,4,5].map((star) => (
                  <Ionicons key={star} name="star" size={14} color="#FFD700" />
                ))}
              </View>
              <Text style={styles.testimonialText}>
                "Migração sem complicações e equipe muito atenciosa."
              </Text>
            </View>
          </View>
        </View>

        {/* Visit Website CTA */}
        <TouchableOpacity style={styles.websiteButton}>
          <Ionicons name="globe-outline" size={20} color="#0a0a0a" />
          <Text style={styles.websiteButtonText}>Visite nosso site</Text>
          <Ionicons name="arrow-forward-outline" size={20} color="#0a0a0a" />
        </TouchableOpacity>

        {/* Services Section */}
        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Nossos Serviços</Text>
          
          {/* Hosting Service Card */}
          <View style={styles.serviceCard}>
            <View style={styles.serviceHeader}>
              <View style={styles.serviceIconContainer}>
                <Ionicons name="server-outline" size={28} color="#ffffff" />
              </View>
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceTitle}>Hospedagem de Sites</Text>
                <Text style={styles.serviceDescription}>
                  Hospedagem confiável e segura para seu site
                </Text>
              </View>
            </View>
            <View style={styles.servicePromo}>
              <Promo3 urlImage={""} />
            </View>
            <TouchableOpacity style={styles.serviceButton}>
              <Text style={styles.serviceButtonText}>Conhecer Planos</Text>
              <Ionicons name="chevron-forward-outline" size={16} color="#888" />
            </TouchableOpacity>
          </View>

          {/* VPS Service Card */}
          <View style={styles.serviceCard}>
            <View style={styles.serviceHeader}>
              <View style={styles.serviceIconContainer}>
                <Ionicons name="desktop-outline" size={28} color="#ffffff" />
              </View>
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceTitle}>Painel de VPS</Text>
                <Text style={styles.serviceDescription}>
                  Servidores virtuais com total controle e flexibilidade
                </Text>
              </View>
            </View>
            <View style={styles.servicePromo}>
              <Promo2 urlImage={""} />
            </View>
            <TouchableOpacity style={styles.serviceButton}>
              <Text style={styles.serviceButtonText}>Ver Configurações</Text>
              <Ionicons name="chevron-forward-outline" size={16} color="#888" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>99.9%</Text>
            <Text style={styles.statLabel}>Uptime</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24/7</Text>
            <Text style={styles.statLabel}>Suporte</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>1000+</Text>
            <Text style={styles.statLabel}>Clientes</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#0a0a0a',
  },
  container: {
    flex: 1,

    marginBottom: 16,

    paddingHorizontal: 24,
  },
  
  // Hero Section
  heroSection: {
    paddingTop: height * 0.06,
    marginBottom: 32,
  },
  heroContent: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '300',
    color: '#ffffff',
    letterSpacing: 1,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#888',
    fontWeight: '300',
  },
  promoContainer: {
    alignItems: 'center',
  },

  // CTA Section
  ctaSection: {
    marginBottom: 40,
  },
  ctaCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
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
  ctaIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  ctaTitle: {
    fontSize: 26,
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  ctaDescription: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 12,
    fontWeight: '300',
  },

  // Section Headers
  sectionHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '300',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: 1,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    fontWeight: '300',
  },

  // Testimonials Section
  testimonialsSection: {
    marginBottom: 40,
  },
  testimonialsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  testimonialCard: {
    width: (width - 64) / 3,
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  testimonialText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    fontWeight: '300',
    lineHeight: 16,
  },

  // Website Button
  websiteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 40,
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  websiteButtonText: {
    color: '#0a0a0a',
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 12,
  },

  // Services Section
  servicesSection: {
    marginBottom: 40,
  },
  serviceCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
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
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  serviceIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#888',
    fontWeight: '300',
  },
  servicePromo: {
    marginVertical: 16,
  },
  serviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  serviceButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
  },

  // Stats Section
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  statCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    width: (width - 72) / 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    fontWeight: '300',
  },
});
