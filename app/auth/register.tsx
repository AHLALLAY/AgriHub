import { auth } from "../../config/firebaseConfig";
import { authStyles } from "../../constants/styles/authStyles";
import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
import {
  validateConfirmationPassword,
  validateEmail,
  validateFullName,
  validatePassword,
} from "../../utils/validation";

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setError("");
    const fullNameError = validateFullName(fullName);
    if (fullNameError) {
      setError(fullNameError);
      return;
    }

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

    const confirmedPasswordError = validateConfirmationPassword(
      password,
      confirmedPassword,
    );
    if (confirmedPasswordError) {
      setError(confirmedPasswordError);
      return;
    }
    setLoading(true);

    try {
      const user = (await createUserWithEmailAndPassword(auth, email, password))
        .user;
      console.log("utilisateur créé : ", user.uid);
      router.replace("/auth/login");
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
          <Text style={authStyles.headerText}>Inscriptions</Text>
          {error && <Text style={authStyles.error}>{error}</Text>}
          <TextInput
            keyboardType="default"
            placeholder="nom et prénom"
            onChangeText={setFullName}
            value={fullName}
            style={authStyles.input}
          />
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
          <TextInput
            secureTextEntry={true}
            placeholder="confirmer le mot de passe"
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
              {loading ? "en cours ..." : "s'inscrire"}
            </Text>
          </TouchableOpacity>
          <Link href={"/auth/login"}>
            <Text style={authStyles.link}>
              Avez-vous un compte ? Connectez-vous
            </Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
