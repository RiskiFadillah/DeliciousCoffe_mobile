import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import styleHome from "../styles/stylehome";
import commonStyle from "../../../../assets/styles/commonStyle";
import { useNavigation } from "@react-navigation/native";

const FavoriteTab = (props) => {
  const navigation = useNavigation();
  const Favorite = props.dataFavorite;
  const handleProductPress = (productId) => {
    navigation.navigate("Detail-Product", { productId });
  };
  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          width: "100%",
          gap: 150,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "#6A4029", fontWeight: "700" }}>Favorite</Text>

        <Pressable
          onPress={() => {
            navigation.navigate("Favorite-Product");
          }}
        >
          <Text style={{ color: "#6A4029", fontWeight: "700" }}>See More</Text>
        </Pressable>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Favorite &&
          Favorite.map((item) => {
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
                      onPress={() => {
                        navigation.navigate("Detail-Product", item);
                      }}
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
    </>
  );
};

export default FavoriteTab;
