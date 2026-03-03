import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
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
            drawerLabel: "Mon Profile",
            title: "Profile",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
