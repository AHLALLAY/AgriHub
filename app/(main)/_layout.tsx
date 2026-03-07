import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { getAuth, signOut } from "firebase/auth";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { COLORS } from "../../constants/colors";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";


export default function Layout() {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        return router.replace("/auth/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <View style={logoutStyle.footer}>
              <TouchableOpacity onPress={handleLogout} style={logoutStyle.btn}>
                <Text style={logoutStyle.btnText}>Déconnexion</Text>
              </TouchableOpacity>
            </View>
          </DrawerContentScrollView>
        )}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Accueil",
            title: "Tableau de bord",
          }}
        />
        <Drawer.Screen
          name="parcelles/index"
          options={{
            drawerLabel: "Mes Parcelles",
            title: "Parcelles",
          }}
        />
        <Drawer.Screen
          name="recolte/index"
          options={{
            drawerLabel: "Mes Récoltes",
            title: "Récoltes",
          }}
        />
        <Drawer.Screen
          name="profiles/index"
          options={{
            drawerLabel: "Mon Profil",
            title: "Profil",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const logoutStyle = StyleSheet.create({
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border.divider,
  },
  btn: {
    backgroundColor: COLORS.background.error,
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
  },
  btnText: {
    color: COLORS.text.error,
  },
});
