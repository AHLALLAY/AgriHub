import { ScrollView, Text, View } from "react-native";
import { sharedStyles } from "../../../constants/sharedStyles";

export default function RecolteScreen() {
  return (
    <ScrollView
      style={sharedStyles.container}
      contentContainerStyle={sharedStyles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={sharedStyles.screenTitle}>Mes Récoltes</Text>
      <View style={sharedStyles.section}>
        <Text style={sharedStyles.sectionTitle}>Récoltes</Text>
      </View>
    </ScrollView>
  );
}
