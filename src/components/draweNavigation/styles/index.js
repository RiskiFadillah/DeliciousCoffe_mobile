import { StyleSheet } from "react-native";

const stylesDrawer = StyleSheet.create({
  drawerHeader: {
    height: 280,
    backgroundColor: "#6A4029",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  drawerHeaderImg: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  logoutButton: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: "red",
    borderRadius: 8,
    marginTop: 10,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  sceneContainer: {
    backgroundColor: "white",
  },
});

export default stylesDrawer;
