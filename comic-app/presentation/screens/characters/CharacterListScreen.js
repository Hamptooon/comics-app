// import React from "react";
// import { View, Text, FlatList, StyleSheet } from "react-native";
// import ComicCard from "../../components/ComicCard";
// import useComics from "../../hooks/useComics";

// export default function ComicsListScreen() {
//   const { comics, loading } = useComics();

//   if (loading) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={comics}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => <ComicCard comic={item} />}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f4f4f4" },
// });
// Пример кода в ComicsListScreen.js
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useCharacters from "../../hooks/useCharacters";
import NavBar from "../../components/common/NavBar";
import CharacterCard from "../../components/CharacterCard";
export default function CharactersListScreen() {
  const navigation = useNavigation();
  const { characters, loading } = useCharacters();

  const handleCharacterPress = (character) => {
    navigation.navigate("CharacterDetail", { character }); // передача данных комикса
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard
            character={item}
            onPress={() => handleCharacterPress(item)}
          />
        )}
      />
      <NavBar navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#171717",
  },
  list: {
    marginBottom: 70,
  },
});
