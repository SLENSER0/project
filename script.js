


let personalMovieDB = {
    count: 0,
    movies: {},
    actorc: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов.");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель.");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман.");
        } else {
            console.log("Произошла ошибка.");
        }
    },
    showMyDB: function() {
        if(personalMovieDB.privat == false) {
            console.log("Ok");
            console.log(personalMovieDB);
        } else {
            console.log("No access");
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            const answer = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if(answer != null && answer != "") {
                personalMovieDB.genres[i] = answer;
            } else {
                i--;
            }              
        } 
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
            
    }
};

personalMovieDB.start();
personalMovieDB.writeYourGenres();
//personalMovieDB.showMyDB();

personalMovieDB.genres.forEach(function(key, i) {
    console.log(`"Любимый жанр #${i+1} - это ${key}"`);
});