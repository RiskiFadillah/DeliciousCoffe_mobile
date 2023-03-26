import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import RadioButtonsGroup from "react-native-radio-buttons-group";

// Styles
import styleMyProfile from "./styles/styleMyProfile";

const MyProfile = () => {
  const navigation = useNavigation();
  const [userProfile, setUserProfile] = useState({});
  const [refetch, setRefetch] = useState(false);
  const [refetchHistory, setRefetchHistory] = useState(false);
  const [dataHistory, setDataHistory] = useState(null);
  const id_users = userProfile && userProfile.user && userProfile.user.id_users;

  //   Data History
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://coffeshop-be.cyclic.app/api/v1/order/${id_users}`
        );
        setDataHistory(response.data.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [id_users, refetchHistory]);
  console.log(dataHistory);
  useEffect(() => {
    AsyncStorage.getItem("userLogin")
      .then((userDataString) => {
        const userData = JSON.parse(userDataString);
        //console.log("User data:", userData);
        setUserProfile(userData);
        //agar tidak melooping
        setRefetch(false);
      })
      .catch((error) => {
        console.error("Failed to get user data:", error);
      });
  }, [refetch]);

  return (
    <ScrollView
      style={styleMyProfile.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styleMyProfile.icon}>
        <FontAwesome5 name="chevron-left" size={20} />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#6A4029" }}>
          My Profile
        </Text>
      </View>
      <View style={styleMyProfile.containerImg}>
        {userProfile && userProfile.user && userProfile.user.img ? (
          <Image
            source={{
              uri: userProfile.user.img,
            }}
            style={styleMyProfile.imgProfile}
          />
        ) : (
          <Image
            source={{
              uri: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679451410/img-coffesop/welcome2_tj8h3g.png",
            }}
            style={styleMyProfile.imgProfile}
          />
        )}
        <TouchableOpacity
          style={styleMyProfile.editIconContainer}
          onPress={() => {
            navigation.navigate("Edit Profile", userProfile.user);
          }}
        >
          <FontAwesome5 name="pen" size={15} style={styleMyProfile.editIcon} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: "center",
          paddingTop: 20,
          color: "#6A4029",
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        {userProfile && userProfile.user && userProfile.user.username}
      </Text>
      <View>
        <Text style={{ textAlign: "center", paddingTop: 10, color: "#6A4029" }}>
          {userProfile && userProfile.user && userProfile.user.email}
        </Text>
        <Text style={{ textAlign: "center", color: "#6A4029" }}>
          {userProfile && userProfile.user && userProfile.user.phone_number}
        </Text>
        <Text style={{ textAlign: "center", color: "#6A4029" }}>
          {userProfile && userProfile.user && userProfile.user.address}
        </Text>
      </View>
      <View style={styleMyProfile.separator} />
      <View style={styleMyProfile.orderHistory}>
        <Text style={{ color: "#6A4029", fontWeight: "900", fontSize: 16 }}>
          Order History
        </Text>
        <TouchableOpacity>
          <Text
            style={{ color: "#6A4029", fontSize: 12 }}
            onPress={() => {
              navigation.navigate("History", userProfile.user);
            }}
          >
            {" "}
            See more
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {dataHistory &&
          dataHistory.map((item) => {
            return (
              <View style={styleMyProfile.cardWrapper}>
                {item.images[0].filename ? (
                  <Image
                    source={{ uri: item.images[0].filename }}
                    style={styleMyProfile.imgProduct}
                  />
                ) : (
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679451410/img-coffesop/welcome2_tj8h3g.png",
                    }}
                    style={styleMyProfile.imgProduct}
                  />
                )}
              </View>
            );
          })}
      </ScrollView>
      <View style={styleMyProfile.separator} />
      <View style={styleMyProfile.buttonProfile}>
        <Text style={{ color: "#6A4029", fontWeight: "900", fontSize: 16 }}>
          Edit Password
        </Text>
        <FontAwesome5 name="chevron-right" size={20} color={"#6A4029"} />
      </View>
      <View style={styleMyProfile.buttonFaq}>
        <Text style={{ color: "#6A4029", fontWeight: "900", fontSize: 16 }}>
          FAQ
        </Text>
        <FontAwesome5 name="chevron-right" size={20} color={"#6A4029"} />
      </View>
      <View style={styleMyProfile.buttonFaq}>
        <Text style={{ color: "#6A4029", fontWeight: "900", fontSize: 16 }}>
          Help
        </Text>
        <FontAwesome5 name="chevron-right" size={20} color={"#6A4029"} />
      </View>
      <TouchableOpacity
        style={styleMyProfile.buttonSave}
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
          Save
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MyProfile;
