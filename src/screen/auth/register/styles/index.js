import { StyleSheet } from "react-native";

const stylesRegister = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  containerRegister: {
    display: "flex",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
  },
  registerContainer: {
    borderRadius: 10,
    marginVertical: 120,
    width: "100%",
  },
  input: {
    height: 40,
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
    borderBottomWidth: 0,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    marginVertical: 10,
  },

  inputPass: {
    padding: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: "#ccc",
    marginBottom: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonLogin: {
    backgroundColor: "#6A4029",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonGoogle: {
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 72,
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 20,
  },
});

export default stylesRegister;
