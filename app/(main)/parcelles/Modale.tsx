import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../../constants/colors";
import { sharedStyles } from "../../../constants/sharedStyles";
import { router } from "expo-router";
import { useState } from "react";

export default function ModaleParcelleScreen() {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  const [zone, setZone] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView
      style={sharedStyles.container}
      contentContainerStyle={sharedStyles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={sharedStyles.screenTitle}>Nouvelle Parcelle</Text>
      <View style={sharedStyles.section}>
        <View style={sharedStyles.fieldContainer}>
          <Text style={sharedStyles.label}>Nom</Text>
          <TextInput
            placeholder="nom"
            placeholderTextColor={COLORS.text.placeholder}
            keyboardType="default"
            style={sharedStyles.input}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={sharedStyles.fieldContainer}>
          <Text style={sharedStyles.label}>Surface</Text>
          <TextInput
            placeholder="surface"
            placeholderTextColor={COLORS.text.placeholder}
            keyboardType="numeric"
            style={sharedStyles.input}
            value={area}
            onChangeText={setArea}
          />
        </View>
        <View style={sharedStyles.fieldContainer}>
          <Text style={sharedStyles.label}>Type de culture</Text>
          <TextInput
            placeholder="type de culture"
            placeholderTextColor={COLORS.text.placeholder}
            keyboardType="default"
            style={sharedStyles.input}
            value={type}
            onChangeText={setType}
          />
        </View>
        <View style={sharedStyles.fieldContainer}>
          <Text style={sharedStyles.label}>Zone</Text>
          <TextInput
            placeholder="zone"
            placeholderTextColor={COLORS.text.placeholder}
            keyboardType="numeric"
            style={sharedStyles.input}
            value={zone}
            onChangeText={setZone}
          />
        </View>
        <View style={sharedStyles.fieldContainer}>
          <Text style={sharedStyles.label}>Période</Text>
          <View style={sharedStyles.section}>
            <Text style={sharedStyles.label}>du</Text>
            <TextInput
              placeholder="début"
              placeholderTextColor={COLORS.text.placeholder}
              keyboardType="default"
              style={sharedStyles.input}
              value={start}
              onChangeText={setStart}
            />
            <Text style={sharedStyles.label}>{"jusqu'au"}</Text>
            <TextInput
              placeholder="fin"
              placeholderTextColor={COLORS.text.placeholder}
              keyboardType="default"
              style={sharedStyles.input}
              value={end}
              onChangeText={setEnd}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={sharedStyles.button}>
            <Text style={sharedStyles.buttonText} disabled={loading}>
              {loading ? "en cours ..." : "Ajouter"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            style={{ backgroundColor: COLORS.background.secondary }}
          >
            <Text
              style={{ textAlign: "center", color: COLORS.text.primary }}
              disabled={loading}
            >
              Annuler
            </Text>
          </TouchableOpacity>
        </View>
        {error && <Text>{error}</Text>}
      </View>
    </ScrollView>
  );
}
