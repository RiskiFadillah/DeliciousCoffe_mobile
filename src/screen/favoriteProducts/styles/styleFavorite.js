import { Dimensions, StyleSheet } from "react-native";

const styleFavorite = StyleSheet.create({
  containerFav: {
    marginLeft: 20,
    marginRight: 20,
  },
  cardWrapper: {
    marginTop: 25,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    
  },
  card: {
    backgroundColor: "#fff",
    height: 180,
    elevation: 7,
    width: "46%",
    borderRadius: 30,
    marginTop: 55,
  },
  imgCard: {
    position: "absolute",
    zIndex: 9,
    resizeMode: "contain",
    width: 120,
    height: 120,
    borderRadius: 20,
    marginLeft: 9,
    top: -40,
  },
  productTitle: {
    fontSize: 18,
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
});

export default styleFavorite;
