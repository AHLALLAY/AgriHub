import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text.primary,
    marginBottom: 16,
  },
  section: {
    backgroundColor: COLORS.background.secondary,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border.card,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text.primary,
    marginBottom: 12,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.text.primary,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border.input,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: COLORS.text.input,
    backgroundColor: COLORS.background.secondary,
  },
  button: {
    backgroundColor: COLORS.background.button,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: COLORS.text.button,
    fontSize: 16,
    fontWeight: "600",
  },
});
