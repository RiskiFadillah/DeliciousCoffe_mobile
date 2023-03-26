import { Dimensions, StyleSheet } from "react-native";

const stylePayment = StyleSheet.create({
  px_container: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  hero: {
    width: 330,
    height: 230,
    borderRadius: 20,
    marginTop: 5,
  },
  title: {
    fontWeight: "700",
    fontSize: 25,
    marginTop: 20,
  },
  product: {
    fontWeight: "700",
    fontSize: 16,
    color: "#000000",
  },
  size: {
    fontWeight: "400",
    fontSize: 14,
    color: "#000000",
  },
  price: {
    fontWeight: "700",
    fontSize: 16,
    color: "#000000",
  },
  lineBottom: {
    borderBottomWidth: 0.4,
    borderBottomColor: "#6A4029",
    width: "100%",
    marginTop: 10,
    marginBottom: 0,
  },
  confirmAndCheckout: {
    marginTop: 25,
    paddingLeft: 122,
    paddingRight: 122,
    padding: 20,
    fontSize: 17,
    fontWeight: "700",
  },
  btn_primary: {
    borderWidth: 0.5,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#6A4029",
    color: "#F6F6F9",
  },
});

export default stylePayment;
