import {
  Image,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// Style
import stylesStarted from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function GetStartedPage() {
  const navigation = useNavigation();
  return (
    <View style={stylesStarted.container}>
      <ImageBackground
        style={stylesStarted.backgroundImage}
        source={{
          uri: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679451409/img-coffesop/getstarted_gennbm.png",
        }}
        imageStyle={{ opacity: 0.5 }}
      />
      <View style={stylesStarted.containerRegister}>
        <Text
          style={{
            color: "white",
            fontSize: 50,
            fontWeight: "bold",
            textAlign: "center",
            alignItems: "center",
            marginVertical: 80,
          }}
        >
          Coffee For Everyone
        </Text>
        

        <View style={stylesStarted.registerContainer}>
          <TouchableOpacity
            style={stylesStarted.buttonGetStarted}
            onPress={() => {
              navigation.navigate("Welcome");
            }}
          >
            <Text
              style={{ color: "#000", fontWeight: "bold", textAlign: "center" }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
