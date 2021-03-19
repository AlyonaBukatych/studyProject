"use strict";

// TASK 1

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
    
};

const a = prompt("Один из последних просмотренных фильмов?"),
      b = prompt("На сколько оцените его?"),
      c = prompt("Один из последних просмотренных фильмов?"),
      d = prompt("На сколько оцените его?");



// TASK 2

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(`Пользователь посмотрел ${numberOfFilms} фильмов`);
console.log(personalMovieDB);

// TASK 3



