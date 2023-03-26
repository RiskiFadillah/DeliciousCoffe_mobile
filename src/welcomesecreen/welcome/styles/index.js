import { StyleSheet } from "react-native";

const stylesWelcome = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "black",
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
    marginVertical: 300,
  },

  buttonRegister: {
    backgroundColor: "#6A4029",
    padding: 15,
    borderRadius: 5,
    marginBottom: 30,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonLogin: {
    backgroundColor: "#FFBA33",
    borderRadius: 5,
    alignItems: "center",
    padding: 15,
  },
});

export default stylesWelcome;
