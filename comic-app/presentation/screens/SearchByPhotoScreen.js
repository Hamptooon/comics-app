// src/presentation/screens/search/SearchByPhotoScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function SearchByPhotoScreen() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      searchByPhoto(result.uri);
    }
  };

  const takePhotoWithCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      searchByPhoto(result.uri);
    }
  };

  const searchByPhoto = async (imageUri) => {
    try {
      setLoading(true);
      const response = await fetch("https://your-api-url.com/search-by-photo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageUri }),
      });

      const data = await response.json();
      if (data) {
        Alert.alert("Results", "Комикс или персонаж найден по фото!");
      } else {
        Alert.alert("Not found", "По данному фото ничего не найдено.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Произошла ошибка при поиске.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Comic or Character by Photo</Text>

      <View style={styles.buttonContainer}>
        <Button title="Take a Photo" onPress={takePhotoWithCamera} />
        <Button title="Pick from Gallery" onPress={pickImageFromGallery} />
      </View>

      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});
