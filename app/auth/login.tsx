import { Link } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("null");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {};
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View>
          <Text>Soyez Bienvenue Chez AgricultureHub</Text>
          {error && <Text style={}>{error}</Text>}
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
          <TouchableOpacity onPress={handleLogin} style={} disabled={loading}>
            <Text style={}>{loading ? "en cours ..." : "connexion"}</Text>
          </TouchableOpacity>
          <Link href={"/auth/register"}>
            <Text style={}>Vous n'avez pas de compte ? S'inscrire</Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
