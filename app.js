 


window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle('sticky', window.scrollY > 0);
});
//sidebar function//
document.addEventListener("DOMContentLoaded", function() {
    const navOpener = document.getElementById("nav-opener");
    const navCloser = document.getElementById("nav-closer");
    const navOverlay = document.getElementById("nav-overlay");
    const contentContainer = document.querySelector(".content-container");
  
    navOpener.addEventListener("click", function() {
      navOverlay.classList.add("c-nav-overlay--open");
      document.body.classList.add("is-overlay-open");
      navOverlay.setAttribute("aria-expanded", "true");
      trapFocus(navOverlay);
    });
  
    navCloser.addEventListener("click", function() {
      navOverlay.classList.remove("c-nav-overlay--open");
      document.body.classList.remove("is-overlay-open");
      navOverlay.setAttribute("aria-expanded", "false");
      document.getElementById("nav-opener").focus();
    });
  
    document.addEventListener("click", function(event) {
      if (!navOverlay.contains(event.target) && event.target !== navOpener) {
        navOverlay.classList.remove("c-nav-overlay--open");
        document.body.classList.remove("is-overlay-open");
        navOverlay.setAttribute("aria-expanded", "false");
      }
    });
  
    // Close the navbar when scrolling outside the navbar area
    window.addEventListener("scroll", function() {
      if (navOverlay.classList.contains("c-nav-overlay--open")) {
        navOverlay.classList.remove("c-nav-overlay--open");
        document.body.classList.remove("is-overlay-open");
        navOverlay.setAttribute("aria-expanded", "false");
      }
    });
  });
  
  /* 
      onclick functions to launch the overlay and toggle the required classes
  */
  
  
  
  



// year and a-z box start 
let year = document.getElementById('year');
let a_z = document.getElementById('a_z');

year.addEventListener('click', () => {
    year.classList.toggle('show_year1')
});
a_z.addEventListener('click', () => {
    a_z.classList.toggle('show_year1')
});



// header slider start
 // JavaScript (script.js)
window.addEventListener('DOMContentLoaded', () => {
    let header_dur = document.getElementById('header_dur');
    let header_gen = document.getElementById('header_gen');
    let header_title = document.getElementById('header_title');
    let header_pra = document.getElementById('header_pra');
    let header = document.getElementsByTagName('header')[0];
    let movieContainer = document.getElementById('movie_container');

    let nextButton = document.getElementById('next_button');
    
    let movies = [];
    let currentMovieIndex = 0;

    const loadMovieDetails = (movie) => {
        header.style.background = `url('${movie.bimg}') no-repeat center center/contain`;
        header.style.backgroundSize = "100% 100%"; // Adjust background size
        
     
        
        // Check if genre1 is not 'none' before displaying
        if (movie.genre1 !== 'none') {
            header_gen.innerHTML = `<span class="imdb">IMDB</span><i class="fas fa-star"></i>${movie.rate}
                <a href="#" class="content-genre">${movie.genre1}, ${movie.genre2}, ${movie.genre3}, ${movie.genre4}, ...</a>`;
        } else {
            header_gen.innerHTML = `<span class="imdb">IMDB</span><i class="fas fa-star"></i>${movie.rate}`;
        }
        header_title.innerText = movie.title;
        header_pra.innerText = movie.description;
        

        // Build the genre HTML only for properties with values other than "none"
        let genreHTML = `<span class="imdb">IMDB</span><i class="fas fa-star"></i>${movie.rate}`;
        const genreProperties = [movie.genre1, movie.genre2, movie.genre3, movie.genre4, movie.genre5, movie.genre6, movie.genre7, movie.genre8,
        movie.genre9, movie.genre10, movie.genre11, movie.genre12, movie.genre13, movie.genre14,
         movie.genre15, movie.genre16, movie.genre17, movie.genre18, movie.genre19 ];
        const validGenres = genreProperties.filter(genre => genre && genre.toLowerCase() !== 'none');
        if (validGenres.length > 0) {
            genreHTML += `<a href="#" class="content-genre">${validGenres.join(', ')}</a>`;
        }
        header_gen.innerHTML = genreHTML;
    };

    const loadRandomMovie = () => {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];
        loadMovieDetails(randomMovie);
    };

    const slideMovieCards = () => {
        currentMovieIndex = (currentMovieIndex + 1) % movies.length;
        const nextMovie = movies[currentMovieIndex];
        loadMovieDetails(nextMovie);
        movieContainer.style.transform = `translateX(-${currentMovieIndex * 100}%)`;
    };

    nextButton.addEventListener('click', () => {
        currentMovieIndex = (currentMovieIndex + 1) % movies.length;
        slideMovieCards();
    });

    fetch('movie.json')
        .then(response => response.json())
        .then(data => {
            movies = data.filter(movie => movie.type1 === "all"); // Filter by type10
            loadRandomMovie();
            setInterval(slideMovieCards, 3000);
        });
});




// volume change
let json_url = "movie.json";

fetch(json_url).then(Response => Response.json())
.then((data) =>  {
    data.forEach(element => {
        const { img, title, year, url, rate } = element;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                    <span>IMDB</span>
                    <i class="bi bi-star-fill"></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
              `

        all.appendChild(card);
    });
 


//search bar//
let search = document.getElementById('search');
let searchIcon = document.getElementById('search_icon');
let searchContainer = document.querySelector('.search');
let searchResults = document.querySelector('.search_bx2');

searchIcon.addEventListener('click', () => {
    search.classList.toggle('search_input');
});
let search_bx2 = document.getElementsByClassName('search_bx2')[0];


data.forEach(element => {
let { img, title, year, url } = element;

let card = document.createElement('a');
card.href = url;
card.innerHTML = ` <img src="${img}" alt="">
<div class="content2">
    <h6>${title}</h6>
    <p>${year}</p>
</div>`;
search_bx2.appendChild(card);
});
search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();
    let a = searchResults.getElementsByTagName('a');
    
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content2')[0];
        
        let textValue = b.textContent || b.innerText;
        
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            searchResults.style.visibility = "visible";
            searchResults.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        
        if (search.value == 0) {
            searchResults.style.visibility = "hidden";
            searchResults.style.opacity = 0;
        }
    }
    
    if (filteredData.length === 0) {
        const noResults = document.createElement('div');
        noResults.classList.add('no-results');
        noResults.innerText = 'No results found';
        searchResults.appendChild(noResults);
    }
});

window.addEventListener('click', (event) => {
    if (!searchContainer.contains(event.target) && !searchIcon.contains(event.target)) {
        closeSearch();
    }
});

search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});

function closeSearch() {
    searchResults.style.visibility = "hidden";
    searchResults.style.opacity = 0;
}

   //search filter

  
 
 






 






});



//Pagination//
document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 14; // Number of items to display per page
    const movieContainer = document.querySelector(".movie_bx_2");
    const pagination = document.querySelector(".pagination");
    let json_url = "movie.json";

    fetch(json_url).then(Response => Response.json())
    .then((data) =>  {
            const totalPages = Math.ceil(data.length / itemsPerPage);
            let currentPage = 1;

            function displayPage(pageNumber) {
                movieContainer.innerHTML = "";
                const startIndex = (pageNumber - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;

                for (let i = startIndex; i < endIndex && i < data.length; i++) {
                    const { img, title, year, url, rate } = data[i];
                    const card = document.createElement("div");
                    card.classList.add("card");
                    card.innerHTML = `
                        <a href="${url}">
                            <img src="${img}" alt="${title}">
                            <div class="content">
                                <h5>${title}</h5>
                                <h6>
                                    <span>${year}</span>
                                    <div class="rate">
                                        <span>IMDB</span>
                                        <i class="bi bi-star-fill"></i>
                                        <h6>${rate}</h6>
                                    </div>
                                </h6>
                            </div>
                        </a>
                    `;
                    movieContainer.appendChild(card);
                }
            }

            function updatePagination() {
                pagination.innerHTML = "";
                for (let i = 1; i <= totalPages; i++) {
                    const li = document.createElement("li");
                    li.classList.add("page-item");
                    if (i === currentPage) {
                        li.classList.add("current-page", "active");
                    }
                    const a = document.createElement("a");
                    a.classList.add("page-link");
                    a.href = "#";
                    a.textContent = i;
                    a.addEventListener("click", () => {
                        currentPage = i;
                        displayPage(currentPage);
                        updatePagination();
                    });
                    li.appendChild(a);
                    pagination.appendChild(li);
                }
            }

            displayPage(currentPage);
            updatePagination();
        });
    });
 
    document.addEventListener('DOMContentLoaded', async function() {
        try {
            const response = await fetch('movie.json'); // Replace with your data source URL
            const data = await response.json();

            // Loop through data and create movie cards on the main webpage
            data.forEach(element => {
                const { img, title, year, url, rate } = element;
                const card = document.createElement('div');
                // Create card content and add it to the card element
                // ...
                card.classList.add("card");
                card.innerHTML = `
                    <a href="${url}">
                        <img src="${img}" alt="${title}">
                        <div class="content">
                            <h5>${title}</h5>
                            <h6>
                                <span>${year}</span>
                                <div class="rate">
                                    <span>IMDB</span>
                                    <i class="bi bi-star-fill"></i>
                                    <h6>${rate}</h6>
                                </div>
                            </h6>
                        </div>
                    </a>
                `;
              

                // Append the card to the appropriate container on the main webpage
                document.getElementById('movies-container').appendChild(card);
            });
        } catch (error) {
            console.error(error);
        }
        
    });

