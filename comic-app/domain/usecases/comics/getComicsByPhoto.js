import comicsRepository from "../../../data/repositories/comicsRepositoryImpl";

export default async function getComicsByTitle(imageUrl) {
  return comicsRepository.getComicsByPhoto(imageUrl);
}
