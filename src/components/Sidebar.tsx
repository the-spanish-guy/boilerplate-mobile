import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { View } from "react-native";

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "lightblue",
      }}
    ></View>
  );
};

export default Sidebar;
