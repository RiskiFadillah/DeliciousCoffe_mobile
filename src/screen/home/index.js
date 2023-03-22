// import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
// Style
import commonStyle from "../../../assets/styles/commonStyle";
import styleHome from "./styles/stylehome";

// Tab
import CustomTab from "./customTab";
import FavoriteTab from "./favoriteTab";
import FoodTab from "./foodTab";
import CoffeTab from "./coffeeTab";
import NonCoffeTab from "./noncoffeetab";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  const [dataFavorite, setDataFavorite] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [dataFood, setDataFood] = useState(null);
  const [dataCoffee, setDataCoffee] = useState(null);
  const [dataNonCoffee, setDataNonCoffee] = useState(null);
  const navigation = useNavigation();
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://coffeshop-be.cyclic.app/api/v1/Products",
          {
            params: {
              search: searchText,
              category: "",
              limit: 20,
              page: 1,
            },
          }
        );
        setRefetch(setDataFavorite(response.data.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [refetch, searchText]);
  // console.log(searchText);
  const [activeTab, setActiveTab] = useState(null);
  const renderTab = () => {
    switch (activeTab) {
      case "Favorite Tab":
        return (
          <FavoriteTab dataFavorite={dataFavorite} searchInput={searchText} />
        );
      case "Food Tab":
        return <FoodTab searchInput={searchText} />;
      case "Coffe Tab":
        return <CoffeTab searchInput={searchText} />;
      case "Non Coffe Tab":
        return <NonCoffeTab searchInput={searchText} />;
      default:
        return (
          <FavoriteTab dataFavorite={dataFavorite} searchInput={searchText} />
        );
    }
  };
  return (
    <ScrollView style={commonStyle.bg}>
      <View>
        <Text style={[commonStyle.mlBase, styleHome.title]}>
          A good coffe is a good day{" "}
        </Text>
        <Text style={[commonStyle.mlBase, styleHome.sectionTitle]}>
          Favorite Products
        </Text>
        <View style={[commonStyle.mlBase, styleHome.containerSearch]}>
          <TextInput
            style={styleHome.searchInput}
            placeholder="🔎  Search"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
        </View>
        <View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <CustomTab
                activeTab={activeTab}
                tabName="Favorite"
                onPress={() => setActiveTab("Favorite Tab")}
              />
              <CustomTab
                activeTab={activeTab}
                tabName="Food"
                onPress={() => setActiveTab("Food Tab")}
              />
              <CustomTab
                activeTab={activeTab}
                tabName="Coffe"
                onPress={() => setActiveTab("Coffe Tab")}
              />
              <CustomTab
                activeTab={activeTab}
                tabName="Non Coffe"
                onPress={() => setActiveTab("Non Coffe Tab")}
              />
            </View>
            <Pressable
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
                width: "100%",
                marginLeft: -30,
                marginBottom: 20,
              }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={{ color: "#6A4029", fontWeight: "700" }}>
                See More
              </Text>
            </Pressable>
            {renderTab()}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

{
  /* <FlatList
            contentContainerStyle={{ backgroundColor: "aaa" }}
            horizontal={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={() => {
              return (
                <View style={style.cardWrapper}>
                  <View style={style.card}></View>
                </View>
              );
            }}
          /> */
}
