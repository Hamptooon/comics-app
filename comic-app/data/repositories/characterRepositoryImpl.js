import CharacterRepository from "../../domain/repositories/characterRepository";
import CharacterEntity from "../../domain/entities/characterEntity";
import mockCharacters from "../mockData/mockCharacters";

class CharacterRepositoryImpl extends CharacterRepository {
  getCharacters() {
    return mockCharacters.map((character) => new CharacterEntity(character));
  }
  getCharacterByName(name) {
    return mockCharacters
      .filter((character) => character.name.includes(name))
      .map((character) => new CharacterEntity(character));
  }
  getMostPopularCharacters() {
    return mockCharacters
      .sort((a, b) => b.popularity - a.popularity)
      .map((character) => new CharacterEntity(character));
  }
  getCharacterByPhoto(imageUrl) {
    return mockCharacters
      .filter((character) => character.imageUrl.includes(imageUrl))
      .map((character) => new CharacterEntity(character));
  }
}
export default new CharacterRepositoryImpl();
