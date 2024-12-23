// // https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js.map
// // https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.js
// // https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js
// // https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css


// // // <!-- Initialize Swiper -->
// // const swiper = new Swiper('.mySwiper', {
// //    direction: 'horizontal',
// //    loop: true,
// //    pagination: {
// //       el: '.swiper-pagination',
// //       clickable: true,
// //    },
// //    navigation: {
// //       nextEl: '.swiper-button-next',
// //       prevEl: '.swiper-button-prev',
// //    },
// // });


// fetch("https://drakorin.vercel.app/api/movie/get-all").then(function (response){
//    return response.json();
// })
// .then(function (data){
//    const container = document.querySelector(".container");
//    console.log(data)
//    const movies = data.data
//    for (let movie of movies){
//       const box = document.createElement("div");
//       box.classList.add("box");
//       // const h1 = document.createElement("h1")
//       // h1.textContent = movie.title;
//       // box.appendChild(h1)
//       // container.appendChild(box);
//       // const image = document.createElement("img");
//       // image.classList.add("image");
//       // image.setAttribute("src", movie.poster);
//       // box.appendChild(image);
//       // const video = document.createElement("video");
//       // video.classList.add("video");
//       // video.setAttribute("src", movie.trailer);
//       // box.appendChild(video);

//       let trailerUrl = movie.trailer;
//          if (trailerUrl.includes('youtu.be')) {
//             const videoId = trailerUrl.split('/').pop().split('?')[0];
//             trailerUrl = `https://www.youtube.com/embed/${videoId}`;
//          } else if (trailerUrl.includes('watch?v=')) {
//             const videoId = trailerUrl.split('watch?v=').pop().split('&')[0];
//             trailerUrl = `https://www.youtube.com/embed/${videoId}`;
//          }

//          const iframe = document.createElement("iframe");
//          iframe.setAttribute("src", trailerUrl);
//          iframe.setAttribute("frameborder", "0");
//          iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
//          iframe.setAttribute("allowfullscreen", true);
//          box.appendChild(iframe);

//          container.appendChild(box);
//       }
// });




fetch("https://drakorin.vercel.app/api/movie/get-all").then(function (response){
   return response.json();
})
.then(function (res){
   let index = 0 ;
   let gambar = document.querySelector('.poster')
   gambar.src = res.data[0].poster

   let gambar1 = document.querySelector('.poster1')
   gambar1.src = res.data[1].poster







const carousel = document.querySelector(".main-slider");


let isDragStart = false;

const dragStart = (e) => {
   //updating global variables value on mouse down event
   isDragStart = true;
}

const dragging = (e) => {
   //scrolling images/carousel to left according to mouse pointer
   if(!isDragStart) return;
   e.preventDefault();
   carousel.scrollLeft = e.pageX
}



carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);





   // gambar.style.width = "200px"
   // gambar.style.height = "200px"
   
   // let slide = document.createElement('button')
   // slide.textContent = "<"
   // let slide2 = document.createElement('button')
   // slide2.textContent = ">"
   
   // let count = document.createElement('span')
   // count.textContent = index+1;
   
   // let body = document.querySelector('body')
   // body.appendChild(slide)
   // body.appendChild(count)
   // body.appendChild(slide2)
   
   // console.log(res.data.length)
   // slide.addEventListener('click', ()=> {
   //    if(index <= 0){
   //       gambar.src = res.data[index].poster
   //       count.textContent = index+1;
   //    }else{
   //       index--; 
   //       count.textContent = index+1;
   //       gambar.src = res.data[index].poster
   //    }
   // })
   // slide2.addEventListener('click', ()=> {
   //    if(index >= res.data.length){
   //       gambar.src = res.data[index].poster
   //       count.textContent = index;
   //    }else{
   //       index++; 
   //       count.textContent = index+1;
   //       gambar.src = res.data[index].poster
   //    }
   // })

});




