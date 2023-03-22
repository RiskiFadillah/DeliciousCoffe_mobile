import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styleHome from "../styles/stylehome";
import commonStyle from "../../../../assets/styles/commonStyle";
const FavoriteTab = (props) => {
  const Favorite = props.dataFavorite;
  return (
    <ScrollView horizontal>
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
                  <Text style={styleHome.productTitle}>{item.title}</Text>
                  <Text style={styleHome.productPrice}>IDR {item.price}</Text>
                </View>
              </View>
            </View>
          );
        })}
    </ScrollView>
  );
};

export default FavoriteTab;
