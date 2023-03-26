import { StyleSheet } from "react-native";

const stylesDrawer = StyleSheet.create({
  drawerHeader: {
    height: 280,
    backgroundColor: "#6A4029",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
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
    borderRadius: 8,
    marginTop: 5,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6A4029",
  },
  sceneContainer: {
    backgroundColor: "white",
  },
});

export default stylesDrawer;
