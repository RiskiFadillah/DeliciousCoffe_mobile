import { Dimensions, StyleSheet } from "react-native";

const styleDetailProduct = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 70,
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerImg: {
    alignItems: "center",
    marginTop: 20,
  },
  imgProduct: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  addToCart: {
    backgroundColor: "#6A4029",
    borderRadius: 15,
    alignItems: "center",
    padding: 15,
    marginTop: 80,
  },
});

export default styleDetailProduct;
