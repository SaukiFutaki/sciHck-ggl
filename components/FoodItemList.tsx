import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
interface FoodListItemProps {
  item: {
    label: string;
    cal: number;
    brand: string;
  };
}

export default function FoodListItem({ item }: FoodListItemProps) {
  return (
    <View style={style.container}>
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.label}</Text>
        <Text style={{ fontSize: 14, color: "dimgray" }}>
          {item.cal} cal, {item.brand}
        </Text>
      </View>
      <AntDesign name="pluscircleo" size={24} color="royalblue" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "gainsboro",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
