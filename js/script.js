/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */
'use strict';



let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


start();






function start() {
    numberOfFilms = +prompt('How many movies have you seen so far?', ' ');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))  {
        numberOfFilms = +prompt('How many movies have you seen so far?', ' ');
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`What is your favorite genres in ${i}?`);
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++ ) {
        const a = prompt('What was the last film you watch?', ' '),
            b = +prompt('What is a score?', ' ');
            if (a != '' && b != '' && a != null && b != null && a.length <50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error');
                --i;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        concsole.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

