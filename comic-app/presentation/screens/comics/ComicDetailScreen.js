// src/presentation/screens/comics/ComicDetailScreen.js
import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function ComicDetailScreen({ route, navigation }) {
  const { comic } = route.params;

  const renderInfoItem = (label, value) => (
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container} bounces={false}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: comic.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.popularityBadge}>
          <Text style={styles.popularityText}>{comic.popularity}%</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{comic.title}</Text>

        <View style={styles.infoContainer}>
          {renderInfoItem("Year", comic.year)}
          {renderInfoItem("Author", comic.author)}
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{comic.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 300,
    backgroundColor: "#dfe4ea",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  popularityBadge: {
    position: "absolute",
    right: 16,
    bottom: -20,
    backgroundColor: "#2ed573",
    borderRadius: 20,
    padding: 10,
    minWidth: 60,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  popularityText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#2f3542",
    marginBottom: 16,
  },
  infoContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 16,
    color: "#747d8c",
    fontWeight: "500",
  },
  infoValue: {
    fontSize: 16,
    color: "#2f3542",
    fontWeight: "600",
  },
  descriptionContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2f3542",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#57606f",
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  statItem: {
    alignItems: "center",
  },
  statText: {
    marginTop: 4,
    fontSize: 14,
    color: "#2f3542",
    fontWeight: "500",
  },
});
