export default class Character {
  constructor({ id, name, description, imageUrl, comicsAppearedIn }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.comicsAppearedIn = comicsAppearedIn; // Список комиксов
  }
}
