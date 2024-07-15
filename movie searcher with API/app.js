document.addEventListener("DOMContentLoaded", function() {
    let searchInput = document.querySelector('#searchInput');
    let btn = document.querySelector('#btn');

    let actors = document.querySelector('#Actors');
    let awards = document.querySelector('#Awards');
    let year = document.querySelector('#year');
    let country = document.querySelector('#Country');
    let director = document.querySelector('#Director');
    let genre = document.querySelector('#Genre');
    let language = document.querySelector('#Language');
    let runTime = document.querySelector('#RunTime');
    let imdbRating = document.querySelector('#imdbRating');
    let imdbVotes = document.querySelector('#imdbVotes');
    let title = document.querySelector('#title');
    let desc = document.querySelector('#desc');
    let poster = document.querySelector('#poster');
    let resultNone = document.querySelector("#result-none");

    let resultCont = document.getElementById("result-cont");
    let ldsroller = document.querySelector(".lds-roller");

    let spinner = document.querySelector("#spinner");

    resultCont.classList.add("display-none");
    btn.addEventListener("click", function() {
        let searchInputValue = searchInput.value;
        let api = "http://www.omdbapi.com/?apikey=59ee6327&t=" + searchInputValue;
        spinner.classList.add("display-block");

        resultCont.classList.add("display-none");

        
        fetch(api)
            .then(response => response.json())
            .then(data => {
                console.log(data);


                resultNone.innerText = "";
                if(data.Error === "Movie not found!") {
                    resultNone.innerText = "Movie Not found ☹️";
                    spinner.classList.remove("display-block");
                    resultCont.classList.add("display-none");
                }
                else {
                    spinner.classList.remove("display-block");

                    title.innerText = data.Title;
                    desc.innerText = data.Plot;
                    actors.innerText = data.Actors;
                    awards.innerText = data.Awards;
                    year.innerText = data.Year;
                    country.innerText = data.Country;
                    director.innerText = data.Director;
                    genre.innerText = data.Genre;
                    language.innerText = data.Language;
                    runTime.innerText = data.Runtime;
                    imdbRating.innerText = data.imdbRating;
                    imdbVotes.innerText = data.imdbVotes;
                    poster.src = data.Poster;

                    resultCont.classList.remove("display-none");

                }

            });
    });
});
