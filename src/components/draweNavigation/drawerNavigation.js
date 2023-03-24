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
import { useState, useEffect } from "react";

export default function DrawerCustom(props) {
  const navigation = useNavigation();
  const [userProfile, setUserProfile] = useState({});
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem("userLogin")
      .then((userDataString) => {
        const userData = JSON.parse(userDataString);
        console.log("User data:", userData);
        setUserProfile(userData);
        //agar tidak melooping
        setRefetch(false);
      })
      .catch((error) => {
        console.error("Failed to get user data:", error);
      });
  }, [refetch]);
  //console.log(userProfile);

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
        {userProfile && userProfile.user && userProfile.user.img ? (
          <Image
            source={{
              uri: userProfile.user.img,
            }}
            style={stylesDrawer.drawerHeaderImg}
          />
        ) : (
          <Image
            source={{
              uri: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679451410/img-coffesop/welcome2_tj8h3g.png",
            }}
            style={stylesDrawer.drawerHeaderImg}
          />
        )}
        <Text
          style={{
            paddingTop: 10,
            paddingBottom: 5,
            color: "white",
            fontSize: 17,
          }}
        >
          {userProfile && userProfile.user && userProfile.user.username}
        </Text>
        <Text style={{ color: "white", fontSize: 16 }}>
          {" "}
          {userProfile && userProfile.user && userProfile.user.email}
        </Text>
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
