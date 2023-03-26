import { Dimensions, StyleSheet } from "react-native";

const styleEditProfile = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    gap: 97,
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
  containerInput: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    paddingVertical: 5,
  },
  buttonSave: {
    backgroundColor: "#6A4029",
    borderRadius: 20,
    alignItems: "center",
    padding: 15,
    marginTop: 30,
    marginBottom: 30,
  },
  radioButtons: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default styleEditProfile;
