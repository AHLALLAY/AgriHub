import { ScrollView, View, Text, TextInput } from "react-native";
import { sharedStyles } from "../../../constants/sharedStyles";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

export default function ProfilesScreen() {
  const user = getAuth().currentUser;

  const [name, setName] = useState<string | undefined | null>("");
  const [email, setEmail] = useState<string | undefined | null>("");
  const [createdAt, setCreatedAt] = useState<string | undefined | null>("");

  useEffect(() => {
    setName(user?.displayName);
    setEmail(user?.email);
    setCreatedAt(user?.metadata?.creationTime);
  }, [user]);

  return (
    <ScrollView
      style={sharedStyles.container}
      contentContainerStyle={sharedStyles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={sharedStyles.screenTitle}>Profile</Text>
      <View style={sharedStyles.section}>
        <View style={sharedStyles.fieldContainer}>
          <Text style={sharedStyles.label}>Nom complet</Text>
          <TextInput
            value={name ?? ""}
            style={sharedStyles.input}
            editable={false}
          />
        </View>
        <View style={sharedStyles.fieldContainer}>
          <Text style={sharedStyles.label}>Email</Text>
          <TextInput
            value={email ?? ""}
            style={sharedStyles.input}
            editable={false}
          />
        </View>
        <View style={sharedStyles.fieldContainer}>
          <Text style={sharedStyles.label}>Créé le</Text>
          <TextInput
            value={createdAt ?? ""}
            style={sharedStyles.input}
            editable={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}
