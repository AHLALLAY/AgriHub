import { StyleSheet } from "react-native";
import { COLORS } from "../colors";
export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: COLORS.background.primary,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.text.primary,
    textAlign: "center",
    marginBottom: 100,
  },
  input: {
    backgroundColor: COLORS.background.secondary,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 6,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.border.input,
    shadowColor: COLORS.shadow.default,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  link: {
    color: COLORS.text.link,
    marginTop: 20,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  error: {
    color: COLORS.text.error,
    marginBottom: 16,
    textAlign: "center",
    backgroundColor: COLORS.background.error,
    padding: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
});
