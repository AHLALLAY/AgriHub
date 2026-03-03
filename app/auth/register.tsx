import { authStyles } from "@/constants/authStyles";
import { Link } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("null");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {};
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={authStyles.container}>
          <Text style={authStyles.headerText}>Inscriptions</Text>
          {error && <Text style={authStyles.error}>{error}</Text>}
          <TextInput
            placeholder="nom et prénom"
            onChangeText={setFullName}
            value={fullName}
            style={authStyles.input}
          />
          <TextInput
            placeholder="email"
            onChangeText={setEmail}
            value={email}
            style={authStyles.input}
          />
          <TextInput
            placeholder="mot de pass"
            onChangeText={setPassword}
            value={password}
            style={authStyles.input}
          />
          <TextInput
            placeholder="confirmer le mot de pass"
            onChangeText={setConfirmedPassword}
            value={confirmedPassword}
            style={authStyles.input}
          />
          <TouchableOpacity
            onPress={handleRegister}
            style={authStyles.button}
            disabled={loading}
          >
            <Text style={authStyles.textButton}>
              {loading ? "en cours ..." : "connexion"}
            </Text>
          </TouchableOpacity>
          <Link href={"/auth/login"}>
            <Text style={authStyles.link}>
              Avez-vous un compte ? connectez-vous
            </Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
