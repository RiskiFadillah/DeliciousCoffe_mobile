import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Text, View, TouchableOpacity, Image } from "react-native";
import stylesDrawer from "./styles/index";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DrawerCustom(props) {
  const navigation = useNavigation();
  const hello = 'Hello World'
  console.log(userId, "ini dari drawer navigation");
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userLogin");
      await AsyncStorage.removeItem("DataTransaction");
      await AsyncStorage.removeItem("id_reciver");
      navigation.navigate("Login");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={stylesDrawer.drawerHeader}>
        <Image></Image>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" />
      <TouchableOpacity style={stylesDrawer.logoutButton}>
        <Text style={stylesDrawer.logoutButtonText} onPress={handleLogout}>
          Logout
        </Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}
