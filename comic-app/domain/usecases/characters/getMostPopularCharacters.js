import characterRepository from "../../../data/repositories/characterRepositoryImpl";

export default async function getMostPopularCharacters() {
  return characterRepository.getMostPopularCharacters();
}
