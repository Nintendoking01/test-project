"use strict";
let numberOfFilms = +prompt("How many films are you watched?", "");
console.log(numberOfFilms)

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// questionNumberThree = prompt("What was the last movie you watched?", ""),
//     questionNumberFour = +prompt("How much would you rate it?", "");



for (let i = 0; i < 2; i++) {
    let questionNumberOne = prompt("What was the last movie you watched?", ""),
        questionNumberTwo = +prompt("How much would you rate it?", "");

    if (questionNumberOne != null && questionNumberTwo != null && questionNumberOne != '' && questionNumberTwo != '' && questionNumberOne.length < 50) {
        personalMovieDb.movies[questionNumberOne] = questionNumberTwo;
        console.log("Done")
    } else {
        console.log('error');
        i--;
    }
};
if (personalMovieDb.count < 10) {
    console.log("Watched quite a few films");
} else if (personalMovieDb.count >= 10 && personalMovieDb < 30) {
    console.log("Are you a classic viewer");
} else if (personalMovieDb.count >= 30) {
    console.log("Are you a film buff?");
} else {
    console.log("An error has occurred");
}

console.log(personalMovieDb);

