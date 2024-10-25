import ComicsRepository from "../../domain/repositories/comicsRepository";
import ComicEntity from "../../domain/entities/comicEntity";
import mockComics from "../mockData/mockComics";

class ComicsRepositoryImpl extends ComicsRepository {
  getComics() {
    return mockComics.map((comic) => new ComicEntity(comic));
  }

  getComicsByYear(year) {
    return mockComics
      .filter((comic) => comic.year === year)
      .map((comic) => new ComicEntity(comic));
  }

  getComicsByTitle(title) {
    return mockComics
      .filter((comic) => comic.title.includes(title))
      .map((comic) => new ComicEntity(comic));
  }
  getComicsByPhoto(imageUrl) {
    return mockComics
      .filter((comic) => comic.imageUrl.includes(imageUrl))
      .map((comic) => new ComicEntity(comic));
  }
  getMostPopularComics() {
    return mockComics
      .sort((a, b) => b.popularity - a.popularity)
      .map((comic) => new ComicEntity(comic));
  }

  getFavoriteComics(userId) {
    // Здесь должна быть реализация с проверкой у пользователя. Для примера — фильтр по `isFavorite`.
    return mockComics
      .filter((comic) => comic.isFavorite)
      .map((comic) => new ComicEntity(comic));
  }
}

export default new ComicsRepositoryImpl();
