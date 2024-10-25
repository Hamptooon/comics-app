import characterRepository from "../../../data/repositories/characterRepositoryImpl";

export default async function getCharacters() {
  return characterRepository.getCharacters();
}
