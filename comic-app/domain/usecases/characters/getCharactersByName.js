import characterRepository from "../../../data/repositories/characterRepositoryImpl";

export default async function getCharacterByName(name) {
  return characterRepository.getCharacterByName(name);
}
