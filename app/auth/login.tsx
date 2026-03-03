import { authStyles } from "@/constants/authStyles";
import { Link } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("null");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {};
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={authStyles.container}>
          <Text style={authStyles.headerText}>
            Soyez Bienvenue Chez AgricultureHub
          </Text>
          {error && <Text style={authStyles.error}>{error}</Text>}
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
          <TouchableOpacity
            onPress={handleLogin}
            style={authStyles.button}
            disabled={loading}
          >
            <Text style={authStyles.textButton}>
              {loading ? "en cours ..." : "connexion"}
            </Text>
          </TouchableOpacity>
          <Link href={"/auth/register"}>
            <Text style={authStyles.link}>
              Vous n'avez pas de compte ? S'inscrire
            </Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
