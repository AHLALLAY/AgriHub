import { Link } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
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
    <KeyboardAvoidingView>
      <ScrollView>
        <View>
          <Text>Soyez Bienvenue Chez AgricultureHub</Text>
          {error && <Text style={}>{error}</Text>}
          <TextInput
            placeholder="nom et prénom"
            onChangeText={setFullName}
            value={fullName}
            style={}
          />
          <TextInput
            placeholder="email"
            onChangeText={setEmail}
            value={email}
            style={}
          />
          <TextInput
            placeholder="mot de pass"
            onChangeText={setPassword}
            value={password}
            style={}
          />
          <TextInput
            placeholder="confirmer le mot de pass"
            onChangeText={setConfirmedPassword}
            value={confirmedPassword}
            style={}
          />
          <TouchableOpacity
            onPress={handleRegister}
            style={}
            disabled={loading}
          >
            <Text style={}>{loading ? "en cours ..." : "connexion"}</Text>
          </TouchableOpacity>
          <Link href={"/auth/login"}>
            <Text style={}>Vous n'avez pas de compte ? S'inscrire</Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
