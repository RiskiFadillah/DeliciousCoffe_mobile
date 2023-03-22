import { StyleSheet } from "react-native";

const stylesStarted = StyleSheet.create({
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
  },
  buttonGetStarted: {
    backgroundColor: "#FFBA33",
    borderRadius: 10,
    alignItems: "center",
    padding: 18,
    marginVertical: 150,
  },
});

export default stylesStarted;
