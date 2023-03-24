import { Dimensions, StyleSheet } from "react-native";

const styleHome = StyleSheet.create({
  title: {
    fontSize: 34,
    color: "#333",
    fontWeight: "700",
    marginTop: "15%",
    marginLeft: 50,
  },
  sectionTitle: {
    color: "#6a4029",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 22.29,
    color: "#333",
    fontWeight: "900",
    textAlign: "center",
  },
  productPrice: {
    color: "#6a4029",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
  },
  cardWrapper: {
    width: Dimensions.get("window").width / 1.8,
    //marginLeft: 15,
    padding: 10,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    height: 250,
    elevation: 7,
    width: "100%",
    borderRadius: 30,
    marginTop: 25,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  containerSearch: {
    margin: 10,
    borderRadius: 50,
    borderWidth: 2,
    width: "70%",
    borderColor: "white",
    backgroundColor: "#EFEEEE",
  },
  searchInput: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
  },
});

export default styleHome;
