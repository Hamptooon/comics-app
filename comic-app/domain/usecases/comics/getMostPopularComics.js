import comicsRepository from "../../../data/repositories/comicsRepositoryImpl";

export default async function getMostPopularComics(year) {
  return comicsRepository.getMostPopularComics(year);
}
