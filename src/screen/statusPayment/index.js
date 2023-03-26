import { Text, View, ScrollView, Image, Pressable } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Fontisto, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../redux/reducerCart";

import styleStatusPayment from "./styles/styleStatusPayment";

const StatusPayment = ({ route }) => {
  const navigation = useNavigation();
  const { totalPayment, tax, total, time } = route.params;

  // REDUX
  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View
          style={[
            {
              display: "flex",
              alignItems: "flex-start",
              backgroundColor: "#F2F2F2",
              flex: 1,
            },
          ]}
        >
          <Text style={styleStatusPayment.title}>Transaction Status</Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              marginTop: 35,
            }}
          >
            <FontAwesome5 name="mug-hot" size={50} color={"#6A4029"} />
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  paddingLeft: 20,
                  fontSize: 25,
                  fontWeight: "700",
                  color: "#6A4029",
                }}
              >
                Delicious Coffee
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Text style={{ paddingLeft: 10 }}>{time}</Text>
          </View>
          <View style={styleStatusPayment.lineBottom} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="checkcircle" color={"green"} size={30} />
            <Text style={{ paddingLeft: 10 }}>Transaction succes!</Text>
          </View>

          {/* Detail list start */}
          <View style={{ marginTop: 15 }}>
            {cart.map((item, index) => {
              const priceTimesQuantity = item.price * item.quantity;
              return (
                <View key={index}>
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
                        style={styleStatusPayment.product}
                      >{`${item.quantity} ${item.title}`}</Text>
                      <Text style={styleStatusPayment.size}>Regular</Text>
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
                        style={styleStatusPayment.price}
                      >{`IDR ${priceTimesQuantity}`}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>

          <View
            style={[
              styleStatusPayment.lineBottom,
              { marginTop: 20, marginBottom: 0 },
            ]}
          />
          <View style={{ marginTop: 20, marginBottom: 40 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "400" }}>Sub total</Text>
              <Text>{`IDR ${total}`}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "400" }}>Tax & Fee</Text>
              <Text>{`IDR ${tax}`}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "400" }}>
                Payment Method
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "400" }}>
                Bank Transfer
              </Text>
            </View>
            <View style={styleStatusPayment.totalPayment}>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                Total Payment
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "700" }}
              >{`IDR ${totalPayment}`}</Text>
            </View>
          </View>

          <Pressable
            style={[
              styleStatusPayment.btn_primary,
              styleStatusPayment.confirmAndCheckout,
            ]}
            onPress={toggleModal}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
              Order more coffee
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
                  THANK YOU
                </Text>
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679711012/img-coffesop/cod_yvu270.gif",
                  }}
                  style={{ width: 150, height: 150 }}
                />
                <Text style={{ fontSize: 16.5, textAlign: "center" }}>
                  Please wait, we'll deliver your order soon, enjoy!
                </Text>
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
                  onPress={() => {
                    cart.forEach((item) => {
                      dispatch(removeFromCart(item));
                    });
                    navigation.navigate("HomeScreen");
                  }}
                  style={{
                    backgroundColor: "#04AA6D",
                    paddingHorizontal: 40,
                    paddingVertical: 15,
                    borderRadius: 20,
                    marginLeft: 10,
                    elevation: 3,
                  }}
                >
                  <Text style={{ color: "white" }}>OKAY!</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          {/* Modal end */}
        </View>
      </ScrollView>
    </>
  );
};

export default StatusPayment;
