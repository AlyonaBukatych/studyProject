'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    add = document.querySelector('.add button'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]'),
    
    movieList = document.querySelector('.promo__interactive-list');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value.toUpperCase();
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм')
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });

    const deleteAdv = (arr) => {
        adv.forEach(item => {
            item.remove();
        });
    }
    
    const makeChanges = () => {
        genre.textContent = 'Драмма';

        poster.style.backgroundImage = 'url(../img/bg.jpg)';
    }

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    adv.forEach(item => { item.remove(); });

    const sortArr = (arr) => {
        arr.sort();
    };

    sortArr(movieDB.movies);

    function createMovieList (films, parent) {
        parent.innerHTML = '';
        sortArr(films);


        movieDB.movies.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);//удалит 1 элемент начиная с iго

                createMovieList(films, parent);
            });
        });
        
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

})

