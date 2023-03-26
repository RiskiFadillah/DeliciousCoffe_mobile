import { StyleSheet } from "react-native";

const styleHistory = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    marginBottom: 30,
  },

  buttonProfile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
  },
  buttonFaq: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
  },
  buttonSave: {
    backgroundColor: "#6A4029",
    borderRadius: 20,
    alignItems: "center",
    padding: 15,
    marginTop: 30,
    marginBottom: 30,
  },
  cardContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 20,
    marginTop: 10,
    gap: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  imgProduct: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});

export default styleHistory;
