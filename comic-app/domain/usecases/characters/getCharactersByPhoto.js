import characterRepository from "../../../data/repositories/characterRepositoryImpl";

export default async function getCharacterByPhoto(imageUrl) {
  return characterRepository.getCharacterByPhoto(imageUrl);
}
