import { StyleSheet } from "react-native";
import { COLORS } from "../colors";

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.background.secondary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border.card,
  },
  nom: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text.primary,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: COLORS.text.secondary,
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.text.primary,
  },
  period: {
    fontSize: 12,
    color: COLORS.text.placeholder,
    marginTop: 6,
  },
});
