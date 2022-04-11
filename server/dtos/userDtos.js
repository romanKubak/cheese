module.exports = class UserDto {
  email;
  id;
  score;

  constructor(model) {
    this.email = model.email;
    this.id = model.id
    this.score = model.score
    this.name = model.name
    this.isSeller = model.isSeller
  }
}
