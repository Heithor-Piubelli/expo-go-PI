import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";


const { width, height } = Dimensions.get("window");

export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [selectedTab, setSelectedTab] = useState("overview");

  const handleLogout = () => {
    console.log("Logout pressed");
  };

  const handleEditProfile = () => {
    setEditMode(!editMode);
  };

  const profileData = {
    name: "Teste da Silva",
    email: "teste@gmail.com",
    birthDate: "01/01/1990",
    document: "123.456.789-00",
    phone: "(11) 91234-5678",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2gtOadQLuabu1vsEGgLDzxBsUAMY5g7RkA&s",
    memberSince: "Janeiro 2023",
    accountStatus: "Premium",
  };

  const stats: { label: string; value: string; icon: React.ComponentProps<typeof Ionicons>['name'] }[] = [
    { label: "Projetos", value: "12", icon: "folder-outline" },
    { label: "Serviços", value: "8", icon: "server-outline" },
    { label: "Suporte", value: "24/7", icon: "headset-outline" },
  ];

  const achievements: { label: string; icon: React.ComponentProps<typeof Ionicons>['name']; color: string }[] = [
    { label: "Fundador", icon: "star-outline", color: "#FFD700" },
    { label: "Ativo", icon: "flame-outline", color: "#FF6B6B" },
    { label: "Confiável", icon: "shield-checkmark-outline", color: "#4ECDC4" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />

      {/* Header com Gradient Effect Simulado */}
      <View style={styles.headerBackground}>
        <View style={styles.headerGradient} />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Perfil</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={handleEditProfile}
          >
            <Ionicons
              name={editMode ? "close-outline" : "pencil-outline"}
              size={20}
              color="#ffffff"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        

        {/* Avatar Section com Card Background */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarBackground}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={{
                  uri: profileData.image,
                }}
              />
              <TouchableOpacity style={styles.cameraButton}>
                <Ionicons name="camera-outline" size={16} color="#0a0a0a" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.profileName}>{profileData.name}</Text>
          <Text style={styles.profileEmail}>{profileData.email}</Text>

          {/* Quick Stats */}
          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <View style={styles.statIconContainer}>
                  <Ionicons name={stat.icon} size={20} color="#ffffff" />
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === "overview" && styles.tabButtonActive,
            ]}
            onPress={() => setSelectedTab("overview")}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === "overview" && styles.tabButtonTextActive,
              ]}
            >
              Informações
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === "security" && styles.tabButtonActive,
            ]}
            onPress={() => setSelectedTab("security")}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === "security" && styles.tabButtonTextActive,
              ]}
            >
              Segurança
            </Text>
          </TouchableOpacity>
        </View>

        {/* Conditional Tab Content */}
        {selectedTab === "overview" && (
          <View style={styles.tabContent}>
            {/* Info Cards Grid */}
            <View style={styles.infoGrid}>
              <View style={[styles.infoCard, styles.infoCardHalf]}>
                <View style={styles.infoHeader}>
                  <View style={styles.infoIconContainer}>
                    <Ionicons
                      name="person-outline"
                      size={20}
                      color="#ffffff"
                    />
                  </View>
                </View>
                <Text style={styles.infoLabel}>Nome</Text>
                <Text style={styles.infoValue}>{profileData.name}</Text>
              </View>

              <View style={[styles.infoCard, styles.infoCardHalf]}>
                <View style={styles.infoHeader}>
                  <View style={styles.infoIconContainer}>
                    <Ionicons
                      name="calendar-outline"
                      size={20}
                      color="#ffffff"
                    />
                  </View>
                </View>
                <Text style={styles.infoLabel}>Nascimento</Text>
                <Text style={styles.infoValue}>{profileData.birthDate}</Text>
              </View>

              <View style={[styles.infoCard, styles.infoCardHalf]}>
                <View style={styles.infoHeader}>
                  <View style={styles.infoIconContainer}>
                    <Ionicons
                      name="document-text-outline"
                      size={20}
                      color="#ffffff"
                    />
                  </View>
                </View>
                <Text style={styles.infoLabel}>CPF</Text>
                <Text style={styles.infoValue}>{profileData.document}</Text>
              </View>

              <View style={[styles.infoCard, styles.infoCardHalf]}>
                <View style={styles.infoHeader}>
                  <View style={styles.infoIconContainer}>
                    <Ionicons name="call-outline" size={20} color="#ffffff" />
                  </View>
                </View>
                <Text style={styles.infoLabel}>Telefone</Text>
                <Text style={styles.infoValue}>{profileData.phone}</Text>
              </View>
            </View>

            {/* Email Full Width */}
            <View style={styles.infoCard}>
              <View style={styles.infoHeader}>
                <View style={styles.infoIconContainer}>
                  <Ionicons name="mail-outline" size={20} color="#ffffff" />
                </View>
              </View>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{profileData.email}</Text>
            </View>
          </View>
        )}

        {selectedTab === "security" && (
          <View style={styles.tabContent}>
            {/* Security Actions */}
            <TouchableOpacity style={styles.securityActionCard}>
              <View style={styles.securityHeader}>
                <View style={styles.securityIconContainer}>
                  <Ionicons name="key-outline" size={24} color="#ffffff" />
                </View>
                <View style={styles.securityInfo}>
                  <Text style={styles.securityTitle}>Alterar Senha</Text>
                  <Text style={styles.securityDescription}>
                    Atualize sua senha com regularidade
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#666"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.securityActionCard}>
              <View style={styles.securityHeader}>
                <View style={styles.securityIconContainer}>
                  <Ionicons
                    name="shield-checkmark-outline"
                    size={24}
                    color="#4ECDC4"
                  />
                </View>
                <View style={styles.securityInfo}>
                  <Text style={styles.securityTitle}>Autenticação 2FA</Text>
                  <Text style={styles.securityDescription}>
                    Ativar verificação em duas etapas
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#666"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.securityActionCard}>
              <View style={styles.securityHeader}>
                <View style={styles.securityIconContainer}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={24}
                    color="#ffffff"
                  />
                </View>
                <View style={styles.securityInfo}>
                  <Text style={styles.securityTitle}>Sessões Ativas</Text>
                  <Text style={styles.securityDescription}>
                    Gerencie seus dispositivos conectados
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#666"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.securityActionCard}>
              <View style={styles.securityHeader}>
                <View style={styles.securityIconContainer}>
                  <Ionicons
                    name="eye-off-outline"
                    size={24}
                    color="#FF6B6B"
                  />
                </View>
                <View style={styles.securityInfo}>
                  <Text style={styles.securityTitle}>Privacidade</Text>
                  <Text style={styles.securityDescription}>
                    Controle quem pode ver seus dados
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#666"
              />
            </TouchableOpacity>
          </View>
        )}

        {/* Actions Section */}
        <View style={styles.actionsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Ações Rápidas</Text>
          </View>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons
              name="information-circle-outline"
              size={20}
              color="#ffffff"
            />
            <Text style={styles.actionButtonText}>Sobre Nós</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="document-outline" size={20} color="#ffffff" />
            <Text style={styles.actionButtonText}>Termos de Uso</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <Ionicons name="log-out-outline" size={20} color="#ffffff" />
          <Text style={styles.logoutButtonText}>Fazer Logout</Text>
        </TouchableOpacity>

        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  headerBackground: {
    position: "relative",
    height: 80,
  },
  headerGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#1a1a1a",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "300",
    color: "#ffffff",
    letterSpacing: 1,
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#2a2a2a",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  scrollContainer: {
    flex: 1,
  },

  // Avatar Section
  avatarSection: {
    alignItems: "center",
    marginBottom: 40,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  avatarBackground: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 12,
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#0a0a0a",
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    
  },
  profileName: {
    fontSize: 26,
    fontWeight: "400",
    color: "#ffffff",
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  profileEmail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "300",
    marginBottom: 24,
  },

  // Stats Container
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  statIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#2a2a2a",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "500",
    color: "#ffffff",
  },
  statLabel: {
    fontSize: 11,
    color: "#888",
    fontWeight: "300",
    marginTop: 2,
  },

  // Section Headers
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "300",
    color: "#ffffff",
    letterSpacing: 0.5,
  },

  // Tab Navigation
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginBottom: 20,
    gap: 12,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2a2a2a",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  tabButtonActive: {
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
  },
  tabButtonText: {
    color: "#888",
    fontSize: 14,
    fontWeight: "400",
  },
  tabButtonTextActive: {
    color: "#0a0a0a",
  },

  // Tab Content
  tabContent: {
    paddingHorizontal: 24,
  },

  // Info Grid
  infoGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 16,
    gap: 12,
  },
  infoCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 14,
    padding: 14,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  infoCardHalf: {
    width: (width - 60) / 2,
  },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#2a2a2a",
    alignItems: "center",
    justifyContent: "center",
  },
  infoLabel: {
    fontSize: 12,
    color: "#888",
    fontWeight: "300",
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "400",
  },

  // Security Action Card
  securityActionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  securityHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  securityIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#2a2a2a",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  securityInfo: {
    flex: 1,
  },
  securityTitle: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "400",
    marginBottom: 2,
  },
  securityDescription: {
    fontSize: 12,
    color: "#888",
    fontWeight: "300",
  },

  // Actions Section
  actionsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  actionButtonText: {
    flex: 1,
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "300",
    marginLeft: 12,
  },

  // Logout Button
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginHorizontal: 24,
    
  },
  logoutButtonText: {
    color: "#0a0a0a",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
  },
  spacer: {
    height: 20,
  },
});
