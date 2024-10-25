import comicsRepository from "../../../data/repositories/comicsRepositoryImpl";

export default async function getComicsByYear(year) {
  return comicsRepository.getComicsByYear(year);
}
