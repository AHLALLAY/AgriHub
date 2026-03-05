import { ScrollView, Text, View } from "react-native";
import { getAuth } from "firebase/auth";
import { sharedStyles } from "../../constants/sharedStyles";
import { dashboardStyle } from "../../constants/styles/dashboardStyle";
import { RecolteItem } from "../../types/recolte";

export default function DashboardScreen() {
  const user = getAuth().currentUser;

  // KPIs – remplacer plus tard par des données Firestore
  const totalRecoltesKg = 0;
  const nombreParcellesActives = 0;
  const rendementMoyenKg = 0;

  const lastRecoltes: RecolteItem[] = [];
  return (
    <ScrollView
      style={sharedStyles.container}
      contentContainerStyle={sharedStyles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={dashboardStyle.welcome}>
        Bonjour
        {user?.displayName ? ` ${user?.displayName} ` : " Agricole"} 👋
      </Text>
      <View style={dashboardStyle.kpiRow}>
        <View style={dashboardStyle.kpiCard}>
          <Text style={dashboardStyle.kpiLabel}>Recoltes (Kg)</Text>
          <Text style={dashboardStyle.kpiValue}>{totalRecoltesKg}</Text>
        </View>
        <View style={dashboardStyle.kpiCard}>
          <Text style={dashboardStyle.kpiLabel}>Parcelles Actives</Text>
          <Text style={dashboardStyle.kpiValue}>{nombreParcellesActives}</Text>
        </View>
        <View style={dashboardStyle.kpiCard}>
          <Text style={dashboardStyle.kpiLabel}>Rendement Moyen (Kg)</Text>
          <Text style={dashboardStyle.kpiValue}>{rendementMoyenKg}</Text>
        </View>
      </View>
      <View style={sharedStyles.section}>
        <Text style={sharedStyles.sectionTitle}>Dernières récoltes</Text>
        {lastRecoltes.length === 0 ? (
          <View style={dashboardStyle.emptyState}>
            <Text style={dashboardStyle.emptyText}>
              Aucune Récolte Enregistrée
            </Text>
            <Text style={dashboardStyle.emptyHint}>
              Ajoutez des récoltes depuis l’onglet « Mes Récoltes »
            </Text>
          </View>
        ) : (
          lastRecoltes.map((r) => (
            <View key={r.id} style={dashboardStyle.recolteRow}>
              <Text style={dashboardStyle.recolteParcelle}>
                {r.parcelleName}
              </Text>
              <Text style={dashboardStyle.recoltePoids}>{r.poidsKg}</Text>
              <Text style={dashboardStyle.recolteDate}>{r.date}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}
