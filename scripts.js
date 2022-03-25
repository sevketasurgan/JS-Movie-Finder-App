const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04f08a8d1a9515d482128d183f6f3be5&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04f08a8d1a9515d482128d183f6f3be5&query=";



const movieContainer = document.getElementById("movieContainer");
const form = document.getElementById("form");
const search = document.getElementById("searchBoxText");

showMovies(apiUrl);
function showMovies(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            console.log(data.results);
            data.results.forEach(element => {
                const el = document.createElement('div');
                el.classList.add("movie");
                const image = document.createElement('img');
                const text = document.createElement('h2');
                text.innerHTML = `${element.title}`;
                image.src = IMGPATH + element.poster_path;
                el.appendChild(image);
                el.appendChild(text);
                movieContainer.appendChild(el);
            });
        });
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    movieContainer.innerHTML = '';

    const searchTerm = search.value;

    if (searchTerm) {
        showMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});

