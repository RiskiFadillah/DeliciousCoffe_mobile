import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import styleFavorite from "./styles/styleFavorite";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const FavoriteProduct = () => {
  const [dataFavorite, setDataFavorite] = useState([]),
    navigation = useNavigation(),
    [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://coffeshop-be.cyclic.app/api/v1/Products",
          {
            params: {
              category: "",
              limit: 20,
              page: 1,
            },
          }
        );
        setDataFavorite(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [refetch]);

  console.log(dataFavorite);

  return (
    <>
      <View style={styleFavorite.containerFav}>
        <Text
          style={{
            marginTop: 30,
            fontSize: 28,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Everyone's Favorite
        </Text>
        <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
          <View style={styleFavorite.cardWrapper}>
            {dataFavorite &&
              dataFavorite.map((item) => {
                console.log(item.id);
                return (
                  <>
                    <View style={styleFavorite.card}>
                      {item.images[0].filename ? (
                        <Image
                          source={{ uri: item.images[0].filename }}
                          style={styleFavorite.imgCard}
                        />
                      ) : (
                        <Image
                          source={{
                            uri: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679241631/img-product/1679241631043.png",
                          }}
                          style={styleFavorite.imgCard}
                        />
                      )}

                      <View style={{ marginTop: 100 }}>
                        <Text
                          style={styleFavorite.productTitle}
                          onPress={() => {
                            navigation.navigate("Detail-Product", item);
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text style={styleFavorite.productPrice}>
                          IDR {item.price}
                        </Text>
                      </View>
                    </View>
                  </>
                );
              })}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default FavoriteProduct;
