export default class ComicEntity {
  constructor({ id, title, year, author, description, imageUrl, popularity }) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.author = author;
    this.description = description;
    this.imageUrl = imageUrl;
    this.popularity = popularity;
  }
}
