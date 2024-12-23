
document.addEventListener("DOMContentLoaded", function () {
   fetch("https://drakorin.vercel.app/api/movie/get-all")
       .then(response => response.json())
       .then(data => {
           const container = document.querySelector(".container");
           const movies = data.data;
           for (let movie of movies) {
               const box = document.createElement("div");
               box.classList.add("box");
               box.setAttribute("data-genre", movie.genre.join(' ').toLowerCase());
               
               const h1 = document.createElement("h1");
               h1.textContent = movie.title;
               box.appendChild(h1);
               
               const image = document.createElement("img");
               image.classList.add("image");
               image.setAttribute("src", movie.poster);
               image.setAttribute("data-trailer", movie.trailer);
               box.appendChild(image);

               const iframe = document.createElement("iframe");
               let trailerUrl = movie.trailer;
               if (trailerUrl.includes('youtu.be')) {
                   const videoId = trailerUrl.split('/').pop().split('?')[0];
                   trailerUrl = `https://www.youtube.com/embed/${videoId}`;
               } else if (trailerUrl.includes('watch?v=')) {
                   const videoId = trailerUrl.split('watch?v=').pop().split('&')[0];
                   trailerUrl = `https://www.youtube.com/embed/${videoId}`;
               }
               iframe.setAttribute("src", trailerUrl);
               box.appendChild(iframe);

               container.appendChild(box);
           }

           const images = document.querySelectorAll(".image");
           images.forEach(image => {
               image.addEventListener("click", () => {
                   const iframe = image.nextElementSibling;
                   iframe.style.display = "block";
                   images.forEach(img => {
                       if (img !== image) {
                           img.nextElementSibling.style.display = "none";
                       }
                   });
               });
           });

           const filterLinks = document.querySelectorAll("nav ul li a");
           filterLinks.forEach(link => {
               link.addEventListener("click", (e) => {
                   e.preventDefault();
                   filterLinks.forEach(l => l.classList.remove("active"));
                   link.classList.add("active");
                   const filter = link.getAttribute("data-filter");
                   const boxes = document.querySelectorAll(".box");
                   boxes.forEach(box => {
                       if (filter === "all" || box.getAttribute("data-genre").includes(filter)) {
                           box.style.display = "block";
                       } else {
                           box.style.display = "none";
                       }
                   });
               });
           });
       });
});










const container = document.querySelector('.container');
const navLinks = document.querySelectorAll('.nav-link');

function createMovieBox(movie) {
   const box = document.createElement('div');
   box.classList.add('box');
   
   const h1 = document.createElement('h1');
   h1.textContent = movie.title;
   box.appendChild(h1);
   
   const image = document.createElement('img');
   image.classList.add('image');
   image.setAttribute('src', movie.poster);
   image.addEventListener('click', () => {
       const iframe = box.querySelector('iframe');
       iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
   });
   box.appendChild(image);

   let trailerUrl = movie.trailer;
   if (trailerUrl.includes('youtu.be')) {
       const videoId = trailerUrl.split('/').pop().split('?')[0];
       trailerUrl = `https://www.youtube.com/embed/${videoId}`;
   } else if (trailerUrl.includes('watch?v=')) {
       const videoId = trailerUrl.split('watch?v=').pop().split('&')[0];
       trailerUrl = `https://www.youtube.com/embed/${videoId}`;
   }

   const iframe = document.createElement('iframe');
   iframe.setAttribute('src', trailerUrl);
   iframe.setAttribute('frameborder', '0');
   iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
   iframe.setAttribute('allowfullscreen', true);
   box.appendChild(iframe);

   container.appendChild(box);
}

function filterMovies(category) {
   container.innerHTML = '';
   let filteredMovies = data;

   if (category === 'trending') {
       filteredMovies = data.filter(movie => movie.rating >= 9.5);
   } else if (category === 'popular') {
       filteredMovies = data.filter(movie => movie.rating >= 9.0);
   } else if (category === 'romance') {
       filteredMovies = data.filter(movie => movie.genre.includes('Romance'));
   } else if (category === 'action') {
       filteredMovies = data.filter(movie => movie.genre.includes('Action'));
   }

   filteredMovies.forEach(createMovieBox);
}

navLinks.forEach(link => {
   link.addEventListener('click', (e) => {
       e.preventDefault();
       const category = link.getAttribute('data-category');
       filterMovies(category);
   });
});

document.addEventListener('DOMContentLoaded', () => {
   filterMovies('home');
});
