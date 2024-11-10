"use strict";

let personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDb.count = +prompt("How many films are you watched?", "");
        while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt("How many films are you watched?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let questionNumberOne = prompt("What was the last movie you watched?", "").trim(),
                questionNumberTwo = +prompt("How much would you rate it?", "");

            if (questionNumberOne != null && questionNumberTwo != null && questionNumberOne != '' && questionNumberTwo != '' && questionNumberOne.length < 50) {
                personalMovieDb.movies[questionNumberOne] = questionNumberTwo;
                console.log("Done")
            } else {
                console.log('error');
                i--;
            }
        };
    },
    detectPersonalLevel: function () {
        if (personalMovieDb.count < 10) {
            console.log("Watched quite a few films");
        } else if (personalMovieDb.count >= 10 && personalMovieDb < 30) {
            console.log("Are you a classic viewer");
        } else if (personalMovieDb.count >= 30) {
            console.log("Are you a film buff");
        } else {
            console.log("An error has occurred");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDb.privat) {
            personalMovieDb.privat = false
        } else {
            personalMovieDb.privat = true
        }
    },
    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Your favorite genre under the number ${i}`);
            personalMovieDb.genres[i - 1] = genre;
        }
    }
};

console.log(personalMovieDb)