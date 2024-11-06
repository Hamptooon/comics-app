import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ComicsListScreen from "../screens/comics/ComicsListScreen";
import ComicDetailScreen from "../screens/comics/ComicDetailScreen";
import CharactersListScreen from "../screens/characters/CharacterListScreen";
import CharacterDetailScreen from "../screens/characters/CharacterDetailScreen";
import SearchByPhotoScreen from "../screens/SearchByPhotoScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#222222",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      initialRouteName="ComicsList"
    >
      <Stack.Screen name="ComicsList" component={ComicsListScreen} />
      <Stack.Screen name="CharactersList" component={CharactersListScreen} />
      <Stack.Screen name="ComicDetail" component={ComicDetailScreen} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
      <Stack.Screen name="SearchByPhoto" component={SearchByPhotoScreen} />
    </Stack.Navigator>
  );
}
