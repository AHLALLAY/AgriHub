import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const dashboardStyle = StyleSheet.create({
  welcome: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text.primary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.text.secondary,
    marginBottom: 20,
  },
  kpiRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 24,
  },
  kpiCard: {
    flex: 1,
    backgroundColor: COLORS.background.secondary,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.border.card,
    alignItems: "center",
  },
  kpiValue: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text.primary,
  },
  kpiLabel: {
    fontSize: 11,
    color: COLORS.text.secondary,
    marginTop: 4,
    textAlign: "center",
  },
  emptyState: {
    paddingVertical: 20,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 14,
    color: COLORS.text.placeholder,
  },
  emptyHint: {
    fontSize: 12,
    color: COLORS.text.placeholder,
    marginTop: 4,
  },
  recolteRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border.divider,
  },
  recolteParcelle: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.text.primary,
    flex: 1,
  },
  recoltePoids: {
    fontSize: 14,
    color: COLORS.text.secondary,
    marginHorizontal: 8,
  },
  recolteDate: {
    fontSize: 12,
    color: COLORS.text.placeholder,
  },
});
