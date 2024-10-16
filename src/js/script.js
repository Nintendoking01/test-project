"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films are you watched?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films are you watched?", "");
    }
}

start();

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}
showMyDB();
function rememberMyFilms() {
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
}

rememberMyFilms();
function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
        console.log("Watched quite a few films");
    } else if (personalMovieDb.count >= 10 && personalMovieDb < 30) {
        console.log("Are you a classic viewer");
    } else if (personalMovieDb.count >= 30) {
        console.log("Are you a film buff");
    } else {
        console.log("An error has occurred");
    }
}

detectPersonalLevel();
console.log(personalMovieDb);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Your favorite genre under the number ${i}`);
        personalMovieDb.genres[i - 1] = genre;
    }
}

writeYourGenres();