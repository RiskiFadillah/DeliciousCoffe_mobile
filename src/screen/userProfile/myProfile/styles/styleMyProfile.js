import { Dimensions, StyleSheet } from "react-native";

const styleMyProfile = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    gap: 87,
  },
  containerImg: {
    alignItems: "center",
    marginTop: 30,
  },
  imgProfile: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  editIconContainer: {
    position: "absolute",
    bottom: 2,
    right: 100,
    width: 35,
    height: 35,
    backgroundColor: "#6A4029",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  editIcon: {
    color: "white",
  },
  containerLine: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // tambahkan styling lain yang diperlukan
  },
  separator: {
    borderBottomWidth: 10,
    borderBottomColor: "#ccc",
    width: "200%",
    marginLeft: -150,
    paddingTop: 30,
  },
  orderHistory: {
    display: "flex",
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardWrapper: {
    width: Dimensions.get("window").width / 4,
    alignItems: "center",
    paddingTop: 15,
    flexDirection: "row",
  },
  imgProduct: {
    width: 70,
    height: 70,
    borderRadius: 20,
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
});

export default styleMyProfile;
