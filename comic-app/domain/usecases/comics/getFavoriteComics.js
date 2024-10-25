import comicsRepository from "../../../data/repositories/comicsRepositoryImpl";

export default async function getFavoriteComics(year) {
  return comicsRepository.getFavoriteComics(year);
}
