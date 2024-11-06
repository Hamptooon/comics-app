import comicsRepository from "../../../data/repositories/comicsRepositoryImpl";

export default async function getComicsByTitle(year) {
  return comicsRepository.getComicsByTitle(year);
}
