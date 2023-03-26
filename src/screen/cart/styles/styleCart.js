import { Dimensions, StyleSheet } from "react-native";

const styleCart = StyleSheet.create({
  px_container: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  cardWrap: {
    display: "flex",
    width: Dimensions.get("window").width / 1,
    padding: 25,
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    height: 102,
    width: "100%",
    borderRadius: 30,
    marginTop: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
  hero: {
    width: 85,
    height: 85,
    marginLeft: 5,

    borderRadius: 50,
  },
  title: {
    fontWeight: "700",
    fontSize: 17,
  },
  price: {
    fontWeight: "400",
    fontSize: 15,
    color: "#895537",
  },
  addItem: {
    backgroundColor: "#FFBA33",
    borderColor: "#FFBA33",
    color: "#000",
    padding: 20,
    fontSize: 17,
    fontWeight: "700",
  },
  confirmAndCheckout: {
    padding: 20,
    fontSize: 17,
    fontWeight: "700",
  },
  btn_primary: {
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#6A4029",
    color: "#F6F6F9",
  },
});

export default styleCart;
