import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import axios from "axios";
import RadioGroup from "react-native-radio-buttons-group";

// styleEditProfile
import styleEditProfile from "./styles/styleEdit";

const EditProfile = ({ route }) => {
  const [name, setName] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const navigation = useNavigation();

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const {
    address,
    email,
    gender,
    id_users,
    img,
    phone_number,
    role,
    username,
  } = route.params;

  // Radio Button
  const [radioButtons, setRadioButtons] = useState([
    {
      id: "1",
      label: "Male",
      value: "Male",
    },
    {
      id: "2",
      label: "Female",
      value: "Female",
    },
  ]);
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styleEditProfile.container}
    >
      <View>
        <View style={styleEditProfile.icon}>
          <FontAwesome5 name="chevron-left" size={20} />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#6A4029" }}>
            Edit profile
          </Text>
        </View>
        <View style={styleEditProfile.containerImg}>
          {img ? (
            <Image
              source={{
                uri: img,
              }}
              style={styleEditProfile.imgProfile}
            />
          ) : (
            <Image
              source={{
                uri: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679451410/img-coffesop/welcome2_tj8h3g.png",
              }}
              style={styleEditProfile.imgProfile}
            />
          )}
          <TouchableOpacity
            style={styleEditProfile.editIconContainer}
            onPress={() => {
              navigation.navigate("Edit Profile", userProfile.user);
            }}
          >
            <FontAwesome5
              name="pen"
              size={15}
              style={styleEditProfile.editIcon}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styleEditProfile.label}>Name</Text>
          <TextInput
            style={styleEditProfile.input}
            value={username}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View>
          <Text>Select an option:</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              containerStyle={styleEditProfile.radioButtons}
            />
          </View>
        </View>

        <View style={styleEditProfile.containerInput}>
          <Text style={styleEditProfile.label}>Email Adress</Text>
          <TextInput
            style={styleEditProfile.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
        </View>
        <View style={styleEditProfile.containerInput}>
          <Text style={styleEditProfile.label}>Phone Number</Text>
          <TextInput
            style={styleEditProfile.input}
            value={phone_number}
            onChangeText={(text) => setPhone(text)}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styleEditProfile.containerInput}>
          <Text style={styleEditProfile.label}>Date of Birth</Text>
          <TextInput
            style={styleEditProfile.input}
            placeholder="dd/mm/yyyy"
            value={date}
            onChangeText={handleDateChange}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
        <View style={styleEditProfile.containerInput}>
          <Text style={styleEditProfile.label}>Delivery Address</Text>
          <TextInput
            style={styleEditProfile.input}
            value={address}
            onChangeText={(text) => setPhone(text)}
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity
          style={styleEditProfile.buttonSave}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 18,
              color: "white",
            }}
          >
            Save and Update
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
