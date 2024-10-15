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

let questionNumberOne = prompt("What was the last movie you watched?", ""),
    questionNumberTwo = +prompt("How much would you rate it?", ""),
    questionNumberThree = prompt("What was the last movie you watched?", ""),
    questionNumberFour = +prompt("How much would you rate it?", "");

personalMovieDb.movies[questionNumberOne] = questionNumberTwo
personalMovieDb.movies[questionNumberThree] = questionNumberFour

console.log(personalMovieDb)