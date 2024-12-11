import { Text, View } from "react-native";
import LabelAnodiam from "../components/UI/LabelAnodiam"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LabelAnodiam labelText="Random String here!!" padding={50} paddingBottom={100}/>
    </View>
  );
}
