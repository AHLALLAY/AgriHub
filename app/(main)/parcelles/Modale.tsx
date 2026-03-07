import {
  KeyboardAvoidingView,
  Platform,
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
import { getAuth } from "firebase/auth";
import {
  validateArea,
  validateCulture,
  validateName,
  validateZone,
  validatePeriod,
} from "../../../utils/parcellesValidation";

export default function ModaleParcelleScreen() {
  const [name, setName] = useState("");
  const [area, setArea] = useState(0.1);
  const [type, setType] = useState("");
  const [zone, setZone] = useState(0);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const user = getAuth().currentUser;

  const addParcelles = () => {
    setError("");
    setLoading(true);

    const nameError = validateName(name);
    if (nameError) {
      setError(nameError);
      setLoading(false);
      return;
    }

    const areaError = validateArea(area);
    if (areaError) {
      setError(areaError);
      setLoading(false);
      return;
    }
    const typeError = validateCulture(type);
    if (typeError) {
      setError(typeError);
      setLoading(false);
      return;
    }

    const zoneError = validateZone(zone);
    if (zoneError) {
      setError(zoneError);
      setLoading(false);
      return;
    }
    const periodeError = validatePeriod(new Date(start), new Date(end));
    if (periodeError) {
      setError(periodeError);
      setLoading(false);
      return;
    }
    setLoading(false);
    try {
      // createParcelles();
    } catch (e: any) {
      setError(e.message || "");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={sharedStyles.container}
        contentContainerStyle={sharedStyles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={sharedStyles.screenTitle}>Nouvelle Parcelle</Text>
        {error && <Text style={sharedStyles.error}>{error}</Text>}
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
              keyboardType="decimal-pad"
              style={sharedStyles.input}
              value={String(area)}
              onChangeText={(t) => setArea(parseFloat(t) || 0)}
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
              value={String(zone)}
              onChangeText={(t) => setZone(parseInt(t) || 0)}
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
            <TouchableOpacity
              style={sharedStyles.button}
              onPress={addParcelles}
              disabled={loading}
            >
              <Text style={sharedStyles.buttonText}>
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
