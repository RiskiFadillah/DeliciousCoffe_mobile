import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../redux/reducerCart";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Style
import styleCart from "./styles/styleCart";

const CartProduct = ({ route }) => {
  // REDUX
  var totalPrice = 0;
  const [totalPriceState, setTotalPriceState] = useState("");
  const navigation = useNavigation();

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item) => {
    if (item.quantity == 1) {
      dispatch(removeFromCart(item));
      setTotalPriceState(null);
    } else {
      dispatch(decrementQuantity(item));
    }
  };

  return (
    <View
      style={[
        styleCart.px_container,
        {
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F2F2F2",
          flex: 1,
        },
      ]}
    >
      {/* No order background */}
      {cart.length < 1 ? (
        <>
          <Image
            source={{
              uri: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679451410/img-coffesop/welcome2_tj8h3g.png",
            }}
            style={{ marginTop: 200, marginRight: 20 }}
          />
          <Text
            style={{
              marginTop: 25,
              textAlign: "center",
              fontSize: 28,
              fontWeight: "900",
            }}
          >
            No orders yet
          </Text>
          <Text
            style={{
              marginTop: 10,
              textAlign: "center",
              fontSize: 17,
              fontWeight: "400",
              opacity: 0.57,
            }}
          >
            Click add more item {"\n"}below to create an order
          </Text>
        </>
      ) : (
        <></>
      )}
      {/* end */}

      <View style={styleCart.cardWrap}>
        <FlatList
          style={{ height: "65%" }}
          showsVerticalScrollIndicator={false}
          data={cart}
          renderItem={({ item, index }) => {
            totalPrice += parseInt(item.price) * item.quantity;
            setTotalPriceState(totalPrice.toFixed(3));

            const price = (parseInt(item.price) * item.quantity).toFixed(3);
            return (
              <View key={index} style={styleCart.card}>
                <View style={{ width: "30%" }}>
                  <Image
                    source={{
                      uri: `${item.images[0].filename}`,
                    }}
                    style={styleCart.hero}
                  />
                </View>

                <View style={{ width: "40%" }}>
                  <Text style={styleCart.title}>{item.title}</Text>
                  <Text style={styleCart.price}>{`IDR ${price}`}</Text>
                </View>

                {/* Quantity prodcut */}
                <View
                  style={{
                    width: "30%",
                    flexDirection: "row",
                    backgroundColor: "#FFBA33",
                    borderRadius: 10,
                    borderColor: "#895537",
                    borderWidth: 1,
                    marginRight: 6,
                    paddingVertical: 6,
                  }}
                >
                  <Pressable onPress={() => decreaseQuantity(item)}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#000",
                        paddingHorizontal: 10,
                      }}
                    >
                      -
                    </Text>
                  </Pressable>
                  <Pressable>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#000",
                        paddingHorizontal: 10,
                      }}
                    >
                      {item.quantity}
                    </Text>
                  </Pressable>
                  <Pressable onPress={() => increaseQuantity(item)}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#000",
                        paddingHorizontal: 10,
                      }}
                    >
                      +
                    </Text>
                  </Pressable>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>

      {totalPriceState ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 18 }}>Total price:</Text>
          <Text
            style={{ fontWeight: "500", fontSize: 15 }}
          >{`IDR ${totalPriceState}`}</Text>
        </View>
      ) : (
        <></>
      )}

      {/* Scroll down if data length > 4 */}
      {cart.length > 4 ? (
        <>
          <Text style={{ fontSize: 14 }}>Swipe Up</Text>
          <MaterialCommunityIcons
            name="gesture-swipe-up"
            size={30}
            color="#895537"
          />
        </>
      ) : (
        <></>
      )}

      <Pressable style={{ position: "absolute", bottom: 120, right: 90 }}>
        <Text
          style={[styleCart.btn_primary, styleCart.addItem]}
          onPress={() => {
            navigation.navigate("Favorite-Product");
          }}
        >
          Add more item
        </Text>
      </Pressable>
      <Pressable style={{ position: "absolute", bottom: 45, right: 60 }}>
        <Text
          style={[styleCart.btn_primary, styleCart.confirmAndCheckout]}
          onPress={() => {
            if (cart.length > 0) {
              navigation.navigate("DeliveryMethod", {
                totalPriceState: parseInt(totalPriceState),
              });
            } else {
              Toast.show({
                type: "error",
                text1: "Sorry",
                text2: "Please add product first!",
                position: "top",
                visibilityTime: 1500,
                topOffset: 40,
              });
            }
          }}
        >
          Confirm and Checkout
        </Text>
      </Pressable>
      <Toast />
    </View>
  );
};

export default CartProduct;
