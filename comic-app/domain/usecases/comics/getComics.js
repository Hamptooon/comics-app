import comicsRepository from "../../../data/repositories/comicsRepositoryImpl";

export default async function getComics() {
  return comicsRepository.getComics();
}
