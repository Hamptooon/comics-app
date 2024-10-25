import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CharacterCard({ character, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: character.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{character.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#222222",
    borderRadius: 5,
  },
  image: { width: "100%", height: 150, borderRadius: 5 },
  title: { fontWeight: "bold", fontSize: 18, marginTop: 5, color: "#EEEEEE" },
  year: { color: "#BDBDBD" },
});
