import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getAuth } from "firebase/auth";
import { sharedStyles } from "../../../constants/sharedStyles";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Parcelle } from "../../../types/parecelle";
import { getParcellesByUser } from "../../../services/parcellesService";
import ParcelleCard from "../../../components/ui/parcelleCard";

export default function ParcellesScreen() {
  const user = getAuth().currentUser;
  const [parcelles, setParcelles] = useState<Parcelle[]>([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const getParcelles = useCallback(async () => {
    if (!user?.uid) {
      setParcelles([]);
      setLoading(false);
      return;
    }
    try {
      const parcelles = await getParcellesByUser(user.uid);
      setParcelles(parcelles);
    } catch {
      setParcelles([]);
    } finally {
      setLoading(false);
    }
  }, [user?.uid]);

  useEffect(() => {
    getParcelles();
  }, [getParcelles]);

  const navigate = () => {
    return router.push("/(main)/parcelles/Modale");
  };

  return (
    <View style={sharedStyles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Text style={sharedStyles.screenTitle}>Parcelles</Text>
        <TouchableOpacity style={sharedStyles.button} onPress={navigate}>
          <Text style={sharedStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={parcelles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ParcelleCard parcelle={item} />}
        contentContainerStyle={sharedStyles.content}
        ListEmptyComponent={
          <View>
            <Text>Aucune parcelle</Text>
            <Text>Ajoutez une parcelles avec le bouton +</Text>
          </View>
        }
      />
    </View>
  );
}
