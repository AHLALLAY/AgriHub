import { cardStyles } from "@/constants/styles/cardStyles";
import { Parcelle } from "@/types/parecelle";
import { Text, TouchableOpacity, View } from "react-native";

type parcelleCardProps = { parcelle: Parcelle };
export default function ParcelleCard({ parcelle }: parcelleCardProps) {
  return (
    <TouchableOpacity style={cardStyles.card}>
      <Text style={cardStyles.nom}>{parcelle.nom}</Text>
      <View style={cardStyles.row}>
        <Text style={cardStyles.label}>Surface : </Text>
        <Text style={cardStyles.value}>{parcelle.surface} ha</Text>
      </View>
      <View style={cardStyles.row}>
        <Text style={cardStyles.label}>Culture : </Text>
        <Text style={cardStyles.value}>{parcelle.typeCulture}</Text>
      </View>
      <View style={cardStyles.row}>
        <Text style={cardStyles.label}>Zone : </Text>
        <Text style={cardStyles.value}>{parcelle.zone}</Text>
      </View>
      <Text style={cardStyles.period}>
        Période : {parcelle.startPeriod} - {parcelle.endPeriod}
      </Text>
    </TouchableOpacity>
  );
}
