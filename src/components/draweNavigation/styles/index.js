import { StyleSheet } from "react-native";

const stylesDrawer = StyleSheet.create({
  drawer: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  drawerHeader: {
    height: 180,
    backgroundColor: "#6A4029",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  drawerHeaderText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6379F4",
  },
  logoutButton: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: "red",
    borderRadius: 8,
    marginTop: 180,
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
