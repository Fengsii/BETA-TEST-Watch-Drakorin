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
