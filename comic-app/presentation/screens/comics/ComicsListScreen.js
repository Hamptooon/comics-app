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
import ComicCard from "../../components/ComicCard";
import { useNavigation } from "@react-navigation/native";
import useComics from "../../hooks/useComics";
import NavBar from "../../components/common/NavBar";
export default function ComicsListScreen() {
  const navigation = useNavigation();
  const { comics, loading } = useComics();

  const handleComicPress = (comic) => {
    navigation.navigate("ComicDetail", { comic }); // передача данных комикса
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={comics}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ComicCard comic={item} onPress={() => handleComicPress(item)} />
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
