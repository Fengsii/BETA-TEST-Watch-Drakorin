// fetch("https://drakorin.vercel.app/api/movie/get-all").then(function (response){
//    return response.json();
// })
// .then(function (res){
//    // let index = 0 ;
//    let gambar = document.querySelector('.poster')
//    gambar.src = res.data[0].poster
//    gambar.style.width = "200px"
//    gambar.style.height = "200px"

//    let gambar1 = document.querySelector('.poster1')
//    gambar.src = res.data[1].poster
//    gambar.style.width = "200px"
//    gambar.style.height = "200px"
   
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

// });


const carousel = document.querySelector(".carousel");

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

