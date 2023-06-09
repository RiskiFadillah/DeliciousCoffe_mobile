import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styleHome from "../styles/stylehome";
import commonStyle from "../../../../assets/styles/commonStyle";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
const FoodTab = (props) => {
  const navigation = useNavigation();
  const [dataFood, setDataFood] = useState(null);
  const [refetch, setRefetch] = useState(false);

  const handleProductPress = (productId) => {
    navigation.navigate("Detail-Product", { productId });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://coffeshop-be.cyclic.app/api/v1/Products",
          {
            params: {
              category: "Food",
              limit: 20,
              page: 1,
            },
          }
        );
        setRefetch(setDataFood(response.data.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [refetch, props.searchInput]);

  return (
    <ScrollView horizontal>
      {dataFood &&
        dataFood.map((item) => {
          return (
            <View style={styleHome.cardWrapper}>
              {item.images[0].filename ? (
                <Image
                  source={{ uri: item.images[0].filename }}
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    resizeMode: "contain",
                    width: 140,
                    height: 160,
                    borderRadius: 20,
                  }}
                />
              ) : (
                <Image
                  source={require("../../../../assets/img/Salty-rice.png")}
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    resizeMode: "contain",
                    width: 140,
                    height: 160,
                    borderRadius: 20,
                  }}
                />
              )}
              <View style={styleHome.card}>
                <View style={{ marginBottom: 30 }}>
                  <Text
                    style={styleHome.productTitle}
                    onPress={() => handleProductPress(item.id)}
                  >
                    {item.title}
                  </Text>
                  <Text style={styleHome.productPrice}>IDR {item.price}</Text>
                </View>
              </View>
            </View>
          );
        })}
    </ScrollView>
  );
};

export default FoodTab;
