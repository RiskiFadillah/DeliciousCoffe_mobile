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
// Style
import stylesRegister from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
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

  const handleRegister = (e) => {
    if (email === "" || password === "" || phone_number === "") {
      ToastAndroid.show(
        "Email,Password and Phone Number must be fill in",
        ToastAndroid.LONG
      );
    } else if (errorEmail) {
      ToastAndroid.show(errorEmail, ToastAndroid.LONG);
    } else {
      e.preventDefault();
      const dataRegister = {
        email: email,
        password: password,
        phone_number: phone_number,
      };
      console.log(dataRegister);
      axios({
        url: "https://coffeshop-be.cyclic.app/api/v1/auth/register",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: dataRegister,
      })
        .then((res) => {
          console.log(res.data.data);
          navigation.navigate("Login");
          ToastAndroid.show(
            "Congratulations, you have successfully registered 🎉",
            ToastAndroid.SHORT
          );
        })
        .catch((err) => {
          console.log(err.response.data.message, "Tidak bisa terkirim");
          ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
        });
    }
  };

  return (
    <View style={stylesRegister.container}>
      <Image
        style={stylesRegister.backgroundImage}
        source={{
          uri: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679451409/img-coffesop/nathan_krt4hs.png",
        }}
      />
      <View style={stylesRegister.containerRegister}>
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
          Sign Up
        </Text>

        <View style={stylesRegister.registerContainer}>
          <TextInput
            style={stylesRegister.input}
            placeholder="Enter your email address"
            placeholderTextColor="#fff"
            keyboardType="email-address"
            onChangeText={handleEmail}
            value={email}
          />
          <View style={stylesRegister.border} />
          <View style={stylesRegister.inputPass}>
            <TextInput
              style={stylesRegister.input}
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
          <TextInput
            style={stylesRegister.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#fff"
            keyboardType="phone-pad"
            onChangeText={setPhone_number}
            value={phone_number}
          />
          <View style={stylesRegister.border} />

          <Pressable>
            <TouchableOpacity
              style={stylesRegister.buttonLogin}
              onPress={handleRegister}
            >
              <Text style={stylesRegister.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesRegister.buttonGoogle}>
              <FontAwesome5
                name="google"
                size={24}
                style={{ marginRight: 10 }}
              />
              <Text style={{ color: "#000", fontWeight: "bold" }}>
                Create with Google
              </Text>
            </TouchableOpacity>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
