import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState, useEffect } from "react";

import styleHistory from "./styles/styleHistory";

const HistoryProduct = ({ route }) => {
  const { id_users } = route.params;
  console.log(id_users);
  const [refetchHistory, setRefetchHistory] = useState(false);
  const [dataHistory, setDataHistory] = useState(null);
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
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styleHistory.container}
      >
        <FontAwesome5 name="chevron-left" size={20} />
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 30, fontWeight: "900", marginBottom: 30 }}>
            Order History
          </Text>
        </View>
        {dataHistory &&
          dataHistory.map((item) => {
            return (
              <>
                <View style={styleHistory.cardContainer}>
                  {item.images[0].filename ? (
                    <Image
                      source={{ uri: item.images[0].filename }}
                      style={styleHistory.imgProduct}
                    />
                  ) : (
                    <Image
                      source={{
                        uri: "https://res.cloudinary.com/doxeoixv4/image/upload/v1679451410/img-coffesop/welcome2_tj8h3g.png",
                      }}
                      style={styleHistory.imgProduct}
                    />
                  )}
                  <View style={{ justifyContent: "center" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "900",
                        paddingBottom: 5,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#6A4029",
                        paddingBottom: 2,
                      }}
                    >
                      IDR {item.price}
                    </Text>
                    <Text style={{ fontSize: 12, color: "#6A4029" }}>
                      {item.time}
                    </Text>
                  </View>
                </View>
              </>
            );
          })}
      </ScrollView>
    </>
  );
};

export default HistoryProduct;
