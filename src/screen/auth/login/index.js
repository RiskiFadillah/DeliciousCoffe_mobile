import {
  Image,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Style
import stylesLogin from "./styles";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleImageClick = () => {
    setShowPassword(!showPassword);
  };

  const handleEmail = (text) => {
    setEmail(text);

    if (text && !text.includes("@")) {
      setErrorEmail("Invalid email format");
    } else {
      setErrorEmail("");
    }
  };

  const handleLogin = (e) => {
    if (errorEmail) {
      ToastAndroid.show(errorEmail, ToastAndroid.LONG);
    } else {
      e.preventDefault();
      const dataLogin = {
        email: email,
        password: password,
      };
      console.log(dataLogin);
      axios({
        url: "https://coffeshop-be.cyclic.app/api/v1/auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: dataLogin,
      })
        .then((res) => {
          AsyncStorage.setItem("userLogin", JSON.stringify(res.data.data));

          navigation.navigate("HomeScreen");
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err.response.data.message, "Tidak bisa terkirim");
          ToastAndroid.show(err.response.data.message, ToastAndroid.LONG);
        });
    }
  };

  return (
    <View style={stylesLogin.container}>
      <Image
        style={stylesLogin.backgroundImage}
        source={{
          uri: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679451415/img-coffesop/robert_xo9pxl.png",
        }}
      />
      <View style={stylesLogin.containerLogin}>
        <Text style={{ color: "white", fontSize: 50, fontWeight: "bold" }}>
          Login
        </Text>

        <View style={stylesLogin.loginContainer}>
          <TextInput
            style={stylesLogin.input}
            placeholder="Enter your email address"
            placeholderTextColor="#fff"
            keyboardType="email-address"
            onChangeText={handleEmail}
            value={email}
          />
          <View style={stylesLogin.border} />
          <View style={stylesLogin.inputPass}>
            <TextInput
              style={stylesLogin.input}
              placeholder="Enter your password"
              placeholderTextColor="#fff"
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity onPress={handleImageClick}>
              <Image
                source={require("../../../../assets/img/illuminati.png")}
                style={{ marginTop: 10, tintColor: "white" }}
              />
            </TouchableOpacity>
          </View>

          <Pressable>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Forgot Password
            </Text>
            <TouchableOpacity
              style={stylesLogin.buttonLogin}
              onPress={handleLogin}
            >
              <Text style={stylesLogin.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={stylesLogin.shortBorder}>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: "#ffffff",
                  marginHorizontal: 10,
                }}
              />
              <Text
                style={{ color: "#ffffff", fontSize: 16, fontWeight: "bold" }}
              >
                or login with
              </Text>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: "#ffffff",
                  marginHorizontal: 10,
                }}
              />
            </View>
            <TouchableOpacity style={stylesLogin.buttonGoogle}>
              <FontAwesome5
                name="google"
                size={24}
                style={{ marginRight: 10 }}
              />
              <Text style={{ color: "#000", fontWeight: "bold" }}>
                Login with Google
              </Text>
            </TouchableOpacity>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
