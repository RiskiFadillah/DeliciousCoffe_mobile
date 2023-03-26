import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  FlatList,
  TextInput,
  Button,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Styles
import stylePayment from "./styles/stylePayment";

// Payment Method
const images = [
  { id: 1, url: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679700007/img-coffesop/bri_2_xrl6yh.png" },
  { id: 2, url: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679710988/img-coffesop/bca1_qaidza.jpg" },
  { id: 3, url: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679710992/img-coffesop/mandiri_ooyzmx.jpg" },
  { id: 4, url: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679711012/img-coffesop/cod_yvu270.gif" },
];

const PaymentScreen = ({ route }) => {
  const navigation = useNavigation();
  const [refetch, setRefetch] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const { totalPriceState } = route.params;

  //  Redux
  const cart = useSelector((state) => state.cart.cart);

  //  Tax
  const subtotal = totalPriceState;
  const tax = totalPriceState * 0.11;
  const total = subtotal + tax;
  console.log(total);

  //   Modal
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  let currentDate = `${day} ${month} ${year} - ${time}`;

  //   Users from Async
  useEffect(() => {
    AsyncStorage.getItem("userLogin")
      .then((userDataString) => {
        const userData = JSON.parse(userDataString);
        setUserProfile(userData);
        //agar tidak melooping
        setRefetch(false);
      })
      .catch((error) => {
        console.error("Failed to get user data:", error);
      });
  }, [refetch]);

  const id_user = userProfile && userProfile.user && userProfile.user.id_users;
  console.log(cart);

  const handlePayment = () => {
    cart.forEach((item) => {
      const data_order = {
        user_id: id_user,
        quantity: item.quantity,
        id: item.id,
        total_price: item.price * item.quantity,
        delivery: "",
        time: currentDate,
        product_image: item.images[0].filename,
      };
      axios
        .post("https://coffeshop-be.cyclic.app/api/v1/order/", data_order)
        .then((res) => {
          navigation.navigate("Status-Payment", {
            totalPayment: total,
            tax: tax,
            total: subtotal,
            time: currentDate,
          });
          console.log(res.data);
        })
        .catch((err) => {
          ToastAndroid.show("Successfully login.", ToastAndroid.SHORT);
        });
    });
  };

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImagePress = (index) => {
    setSelectedIndex(index);
  };

  return (
    <View
      style={[
        stylePayment.px_container,
        {
          display: "flex",
          alignItems: "flex-start",
          backgroundColor: "#F2F2F2",
          flex: 1,
          marginTop: 10,
        },
      ]}
    >
      <Text style={stylePayment.title}>Payment Methods</Text>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        
      >
        {images.map((image, index) => (
          <TouchableOpacity
            key={image.id}
            onPress={() => handleImagePress(index)}
          >
            <Image source={{ uri: image.url }} style={stylePayment.hero} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View>
        {images.map((_, index) => (
          <View key={index} />
        ))}
      </View>

      {/* Detail list start */}
      <FlatList
        style={{ height: "20%" }}
        showsVerticalScrollIndicator={false}
        data={cart}
        renderItem={({ item, index }) => {
          const priceTimesQuantity = item.price * item.quantity;
          return (
            <View key={index}>
              <View style={stylePayment.lineBottom} />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <View style={{ width: "35%" }}>
                  <Text
                    style={stylePayment.product}
                  >{`${item.quantity} ${item.title}`}</Text>
                  <Text style={stylePayment.size}>Regular</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    width: "62%",
                  }}
                >
                  <Text
                    style={stylePayment.price}
                  >{`IDR ${priceTimesQuantity}`}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      {/* Detail list end */}

      {/* Scroll down if data length > 4 */}
      {cart.length > 3 ? (
        <View
          style={{
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            marginBottom: -15,
          }}
        >
          <Text style={{ fontSize: 14 }}>Swipe Up</Text>
          <MaterialCommunityIcons
            name="gesture-swipe-up"
            size={30}
            color="#895537"
          />
        </View>
      ) : (
        <></>
      )}

      {/* Summary start */}
      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 16 }}>Subtotal</Text>
          <Text style={{ fontSize: 16 }}>{`IDR ${subtotal}`}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 16 }}>Tax</Text>
          <Text style={{ fontSize: 16 }}>{`IDR ${tax}`}</Text>
        </View>
      </View>
      {/* Summary end */}

      {/* Total start */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Total</Text>
        <Text
          style={{ fontSize: 20, fontWeight: "700" }}
        >{`IDR ${total}`}</Text>
      </View>
      {/* Total end */}

      <Pressable style={{ marginTop: -30, marginBottom: 25 }}>
        <Text
          style={[stylePayment.btn_primary, stylePayment.confirmAndCheckout]}
          // onPress={() => { navigation.navigate('History')}}
          onPress={toggleModal}
        >
          Pay Now
        </Text>
      </Pressable>

      {/* Modal start */}
      <Modal
        isVisible={isModalVisible}
        animationIn={"zoomIn"}
        animationOut={"zoomOut"}
      >
        <View
          style={{
            // flex: 1,
            backgroundColor: "#fff",
            paddingVertical: 20,
            width: "95%",
            borderRadius: 15,
            marginLeft: 10,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{ fontSize: 28, fontWeight: "600", paddingBottom: 10 }}
            >
              Confirm your order
            </Text>
            <MaterialCommunityIcons
              name="alert-circle-check"
              color={"green"}
              size={100}
              style={stylePayment.cart}
            />
            {/* <Text style={{ fontSize: 16.5 }}>{`${title} : ${productQuantity}`}</Text> */}
            <Text
              style={{ fontSize: 16.5 }}
            >{`Total transaction : IDR ${total}`}</Text>
            <Text style={{ fontSize: 16.5 }}>Are you sure?</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 20,
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#ccc",
                paddingHorizontal: 40,
                paddingVertical: 15,
                borderRadius: 20,
                marginRight: 10,
                elevation: 3,
              }}
              onPress={toggleModal}
            >
              <Text>NO</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#04AA6D",
                paddingHorizontal: 40,
                paddingVertical: 15,
                borderRadius: 20,
                marginLeft: 10,
                elevation: 3,
              }}
              onPress={handlePayment}
            >
              <Text style={{ color: "white" }}>YES</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* Modal end */}
    </View>
  );
};

export default PaymentScreen;
