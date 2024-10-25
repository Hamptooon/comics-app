import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.navigate("ComicsList")}>
        <Text style={styles.navLink}>Main</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ComicsList")}>
        <Text style={styles.navLink}>Comics</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CharactersList")}>
        <Text style={styles.navLink}>Characters</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SearchByPhoto")}>
        <Text style={styles.navLink}>Search by Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#000000",
  },
  navLink: {
    color: "#EEEEEE",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default NavBar;
