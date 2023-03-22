import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const CustomTab = ({ activeTab, tabName, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.tabContainer, activeTab === tabName && styles.activeTab]}
      onPress={onPress}
    >
      <Text style={styles.tabText}>{tabName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    paddingBottom: 30,
  },
  activeTab: {
    textDecorationColor: "#6A4029",
    textDecorationLine: "underline",
    backgroundColor: "gray",
  },
  tabText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default CustomTab;
