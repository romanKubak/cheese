module.exports = class UserDto {
  email;
  id;


  constructor(model) {
    this.email = model.email;
    this.id = model.id
    this.name = model.name
    this.rating = model.rating
    this.img = model.img
  }
}
