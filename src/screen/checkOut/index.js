import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

// styles
import styleCheckout from "./styles/styleCheckout";

const CheckoutProduct = ({ route }) => {
  const { totalPriceState } = route.params;
  const [userProfile, setUserProfile] = useState({});
  const [refetch, setRefetch] = useState(false);
  const navigation = useNavigation();
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

  const [radioButtons, setRadioButtons] = useState([
    {
      id: "1",
      label: "Door delivery",
      value: "Door delivery",
    },
    {
      id: "2",
      label: "Pick up at store",
      value: "Pick up at store",
    },
    {
      id: "3",
      label: "Dine in",
      value: "Dine in",
    },
  ]);
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <View
      style={[
        styleCheckout.px_container,
        {
          display: "flex",
          alignItems: "flex-start",
          backgroundColor: "#F2F2F2",
          flex: 1,
        },
      ]}
    >
      <Text style={styleCheckout.title}>Delivery</Text>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <Text style={styleCheckout.address}>Address details</Text>
        <Text style={styleCheckout.change}>change</Text>
      </View>
      <View style={[styleCheckout.card]}>
        <Text style={{ fontSize: 17, fontWeight: "500" }}>
          {" "}
          {userProfile && userProfile.user && userProfile.user.username}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "400" }}>
          {userProfile && userProfile.user && userProfile.user.address}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "400" }}>
          {userProfile && userProfile.user && userProfile.user.phone_number}
        </Text>
      </View>

      <Text style={[styleCheckout.delivery, { marginTop: 30 }]}>
        Delivery methods
      </Text>
      <View style={[styleCheckout.card, { height: 135 }]}>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          containerStyle={styleCheckout.radioButtons}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 35,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={styleCheckout.total}>Total</Text>
        <Text style={styleCheckout.price}>{`IDR ${totalPriceState}`}</Text>
      </View>

      <Pressable>
        <Text
          style={[global.btn_primary, styleCheckout.confirmAndCheckout]}
          onPress={() => {
            navigation.navigate("Payment-Method", {
              totalPriceState: totalPriceState,
            });
          }}
        >
          Confirm and Checkout
        </Text>
      </Pressable>
    </View>
  );
};

export default CheckoutProduct;
