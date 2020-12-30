let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actorc: {},
    genres: [],
    privar: false
};

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt("Один из последних просмотренных фильмов?"),
        markFilm = prompt("На сколько оцените его?");

    if (lastFilm != null && markFilm != null && lastFilm != '' && markFilm != '' &&
        lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = markFilm;
    } else {
        i--;
    }

}
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов.");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель.");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман.");
} else {
    console.log("Произошла ошибка.");
}

console.log(personalMovieDB.movies);