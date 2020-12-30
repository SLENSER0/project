let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actorc: {},
    genres: [],
    privar: false
 };
let lastFilm = prompt("Один из последних просмотренных фильмов?"),
    markFilm = prompt("На сколько оцените его?");
     
personalMovieDB.movies[lastFilm] = markFilm;
console.log(personalMovieDB.movies);