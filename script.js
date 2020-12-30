let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actorc: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
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
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов.");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель.");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман.");
    } else {
        console.log("Произошла ошибка.");
    }
}
detectPersonalLevel();

function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const answer = prompt(`Ваш любимый жанр под номером ${i+1}`);
        personalMovieDB.genres[i] = answer;
        
    }
}
writeYourGenres();
showMyDB();