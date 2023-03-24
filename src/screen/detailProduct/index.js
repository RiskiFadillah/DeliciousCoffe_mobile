import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/reducerCart";
// Style
import styleDetailProduct from "./styles/styleDetail";

const DetailProduct = ({ route }) => {
  const { id, title, price, category } = route.params;
  console.log(title);
  const navigation = useNavigation();
  const [dataProduct, setDataProduct] = useState(null);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://coffeshop-be.cyclic.app/api/v1/Products/${id}`
        );
        setRefetch(setDataProduct(response.data.data));
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [refetch]);

  //Redux
  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

 

  return (
    <>
      <View style={styleDetailProduct.container}>
        <View style={styleDetailProduct.icon}>
          <FontAwesome5 name="chevron-left" size={24} />
          <FontAwesome5 name="shopping-cart" size={24} />
        </View>
        <View style={styleDetailProduct.containerImg}>
          {dataProduct && dataProduct.images[0].filename ? (
            <Image
              source={{
                uri: dataProduct.images[0].filename,
              }}
              style={styleDetailProduct.imgProduct}
            />
          ) : (
            <Image
              source={{
                uri: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679451410/img-coffesop/welcome2_tj8h3g.png",
              }}
              style={styleDetailProduct.imgProduct}
            />
          )}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "800",
              paddingBottom: 10,
              paddingTop: 12,
            }}
          >
            {dataProduct ? dataProduct.title : undefined}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "#6A4029",
              marginBottom: 20,
            }}
          >
            IDR {dataProduct ? dataProduct.price : undefined}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Delivery Info
          </Text>
          <Text
            style={{
              fontSize: 16,
              paddingTop: 10,
            }}
          >
            Delivered only on monday until friday from 1 pm to 7 pm
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Description
          </Text>
          <Text
            style={{
              fontSize: 16,
              paddingTop: 10,
            }}
          >
            {dataProduct ? dataProduct.description : undefined}
          </Text>
        </View>

        <TouchableOpacity
          style={styleDetailProduct.addToCart}
          onPress={() => {
            // navigation.navigate('Cart', { id, title, price, category, productImage })
            addItemToCart(route.params);
            navigation.navigate("Cart-Product");
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
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DetailProduct;
