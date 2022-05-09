class Spiderman {
  constructor(name, age, actor, movies, studio){
  this.name = name;
  this.age = age;
  this.actor = actor;
  this.movies = movies;
  this.studio = studio;
  }
  getInfo(){
    return `Hi I´m ${this.actor} and this is ${this.studio}`
  }
}

// Esta línea nos permite exportar nuestra clase
module.exports = Spiderman