import { auth } from "../../config/firebaseConfig";
import { authStyles } from "../../constants/styles/authStyles";
import { Link, router } from "expo-router";
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
import { validateEmail, validatePassword } from "../../utils/authValidation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sharedStyles } from "@/constants/sharedStyles";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }
    setLoading(true);
    try {
      const user = (await signInWithEmailAndPassword(auth, email, password))
        .user;
      console.log("utilisateur connecté : ", user.uid);
      router.replace("/(main)");
    } catch (e: any) {
      setError(e.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };
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
          {error && <Text style={sharedStyles.error}>{error}</Text>}
          <TextInput
            keyboardType="email-address"
            placeholder="email"
            onChangeText={setEmail}
            value={email}
            style={authStyles.input}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="mot de passe"
            onChangeText={setPassword}
            value={password}
            style={authStyles.input}
          />
          <TouchableOpacity
            onPress={handleLogin}
            style={sharedStyles.button}
            disabled={loading}
          >
            <Text style={sharedStyles.buttonText}>
              {loading ? "en cours ..." : "connexion"}
            </Text>
          </TouchableOpacity>
          <Link href={"/auth/register"}>
            <Text style={authStyles.link}>
              {"Vous n'avez pas de compte ? S'inscrire"}
            </Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
