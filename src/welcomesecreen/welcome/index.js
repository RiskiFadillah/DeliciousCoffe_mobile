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
import stylesWelcome from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function WelcomePage() {
  const navigation = useNavigation();
  return (
    <View style={stylesWelcome.container}>
      <ImageBackground
        style={stylesWelcome.backgroundImage}
        source={{
          uri: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679451410/img-coffesop/welcome2_tj8h3g.png",
        }}
        imageStyle={{ opacity: 0.5 }}
      />
      <View style={stylesWelcome.containerRegister}>
        <Text
          style={{
            color: "white",
            fontSize: 50,
            fontWeight: "bold",
            textAlign: "center",
            alignItems: "center",
            marginVertical: 50,
          }}
        >
          Welcome!
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: -30,
          }}
        >
          Get a cup of coffee for free every sunday morning
        </Text>

        <View style={stylesWelcome.registerContainer}>
          <Pressable>
            <TouchableOpacity
              style={stylesWelcome.buttonRegister}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={stylesWelcome.buttonText}>Create New Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesWelcome.buttonLogin}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
