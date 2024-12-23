// // fetch("https://drakorin.vercel.app/api/movie/get-all").then(function (response){
// //    return response.json();
// // })
// // .then(function (res){
// //    let index = 0 ;
// //    let gambar = document.querySelector('.poster')
// //    gambar.src = res.data[0].poster

// //    let gambar1 = document.querySelector('.poster1')
// //    gambar1.src = res.data[1].poster

// // });


// fetch("https://drakorin.vercel.app/api/movie/get-all")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(res) {
//     // Pastikan ada elemen dengan kelas 'posters-container' di HTML untuk menampung gambar-gambar
    
    
//     // Perulangan menampialkan 5 objek pertama 
//     res.data.slice(0, 5).forEach(function(drama, index) {
//       // Buat elemen img baru untuk setiap gambar
      
//       let content = document.querySelector('.content');
//       let box = document.createElement('div');
//       box.classList.add("box");

//       let img = document.createElement('img');
//       img.setAttribute("src", drama.poster);
//       img.classList.add('poster'); 

//       let nama = document.createElement('p')
//       nama.classList.add('kualitas')
//       nama.textContent = 'Eksklusif';

//       // Buat elemen p untuk title
//       const title = document.createElement('p');
//       title.classList.add('title');

//       if (index === 4) {
//           // Potong title menjadi dua bagian pada index ke-4
//           const titlePart1 = drama.title.substring(0, 19);
//           const titlePart2 = drama.title.substring(20, 34);

//           // Buat elemen p untuk bagian pertama
//           const part1 = document.createElement('p');
//           part1.textContent = titlePart1;

//           // Buat elemen p untuk bagian kedua
//           const part2 = document.createElement('p');
//           part2.textContent = titlePart2;

//           // Tambahkan kedua elemen p ke dalam elemen title
//           title.appendChild(part1);
//           // title.appendChild(document.createElement('br')); // Tambahkan elemen br di antara bagian pertama dan kedua
//           title.appendChild(part2);
//       } else {
//           title.textContent = drama.title;
//       }


//       let icon = document.createElement('i')
//       icon.classList.add('bx')
//       icon.classList.add('bxs-right-arrow')
//       icon.style.display = 'none'
     
//       box.addEventListener('mouseover', ()=> {
//         icon.style.display = 'flex';
//       });

//       box.addEventListener('mouseout', ()=> {
//         icon.style.display = 'none'
//       });


//       let circle = document.createElement('i');
//       circle.classList.add('bx');
//       circle.classList.add('bx-x');
//       circle.style.display = 'none'
      
//       let trailerUrl = drama.trailer;
//       let videoId;
      
//       if (trailerUrl.includes('youtu.be')) {
//           videoId = trailerUrl.split('/').pop().split('?')[0];
//           trailerUrl = `https://www.youtube.com/embed/${videoId}`;
//       } else if (trailerUrl.includes('watch?v=')) {
//           videoId = trailerUrl.split('watch?v=').pop().split('&')[0];
//           trailerUrl = `https://www.youtube.com/embed/${videoId}`;
//       }
      
//       // Menambahkan parameter untuk autoplay, muted, dan loop
//       trailerUrl += `?autoplay=1&loop=1&playlist=${videoId}`;
      
//       const iframe = document.createElement("iframe");
//       iframe.classList.add('video');
//       iframe.setAttribute("src", trailerUrl);
//       iframe.setAttribute("frameborder", "0");
//       iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
//       iframe.setAttribute("allowfullscreen", true);
//       iframe.style.display = 'none'
      
      
//       icon.addEventListener('click', ()=> {
//         img.style.display = 'none'
//         nama.style.display = 'none'
//         iframe.style.display = 'block'
//         circle.style.display = 'block'
//         icon.style.display = 'none'
//         icon.style.color = 'transparent'
//       })
      
//       circle.addEventListener('click', ()=> {
//         location.reload();
//           img.style.display = 'block'
//           nama.style.display = 'block'
//           iframe.style.display = 'none'
//           circle.style.display = 'none'
//           icon.style.display = 'none'
//           icon.style.color = 'yellow'
//       })

        


         

//       box.appendChild(iframe);
//       box.appendChild(icon);
//       box.appendChild(title);
//       box.appendChild(nama);
//       box.appendChild(img);
//       box.appendChild(circle);
//       content.appendChild(box);


      
//     });


   




//   //   let slide2 = document.querySelector('.slide2');
//   //   let box2 = document.createElement('div');
//   //   box2.classList.add("box2");
//   //   res.data.slice(10, 18).forEach(function(drama) {
//   //     // Buat elemen img baru untuk setiap gambar
//   //     let img2 = document.createElement('img');
//   //     img2.setAttribute("src", drama.poster);
//   //     img2.classList.add('poster2'); // Tambahkan kelas 'poster' untuk styling jika diperlukan
//   //     // img.style.width = "200px";
//   //     // img.style.height = "310px";

//   //     // let box1 = document.createElement('div');
//   //     // box1.classList.add("box1");
//   //     // box1.style.border = " 1px solid white";
      
//   //     // box1.appendChild(img);
//   //     box2.appendChild(img2);
//   //   });

  
//   //  slide2.appendChild(box2);






















//   //  const carousel = document.querySelector(".box");

//   //  let isDragStart = false;

//   //  const dragStart = () => {
//   //     //updating global variables value on mouse down event
//   //     isDragStart = true;
//   //  }

//   //  const dragging = (e) => {
//   //     //scrolling images/carousel to left according to mouse pointer
//   //     if(!isDragStart) return;
//   //     e.preventDefault();
//   //     carousel.scrollLeft = e.pageX
//   //  }
//   //  carousel.addEventListener("mousedown", dragStart);
//   //  carousel.addEventListener("mousemove", dragging);


//   //  const carousel1 = document.querySelector(".box2");

//   //  let isDragStart1 = false;

//   //  const dragStart1 = () => {
//   //     //updating global variables value on mouse down event
//   //     isDragStart1 = true;
//   //  }

//   //  const dragging1 = (e) => {
//   //     //scrolling images/carousel to left according to mouse pointer
//   //     if(!isDragStart1) return;
//   //     e.preventDefault();
//   //     carousel1.scrollLeft = e.pageX
//   //  }
//   //  carousel.addEventListener("mousedown", dragStart1);
//   //  carousel.addEventListener("mousemove", dragging1);



//   });


fetch("https://drakorin.vercel.app/api/movie/get-all")
  .then(function(response) {
    return response.json();
  })
  .then(function(res) {
    let content = document.querySelector('.content');

    // Loop untuk menampilkan 5 objek pertama dari data
    res.data.slice(0, 5).forEach(function(drama, index) {
      let box = document.createElement('div');
      box.classList.add("box");

      let img = document.createElement('img');
      img.setAttribute("src", drama.poster);
      img.classList.add('poster'); 

      let nama = document.createElement('p')
      nama.classList.add('kualitas')
      nama.textContent = 'Eksklusif';

      // Buat elemen p untuk title
      const title = document.createElement('p');
      title.classList.add('title');

      if (index === 4) {
          // Potong title menjadi dua bagian pada index ke-4
          const titlePart1 = drama.title.substring(0, 19);
          const titlePart2 = drama.title.substring(20, 34);

          // Buat elemen p untuk bagian pertama
          const part1 = document.createElement('p');
          part1.textContent = titlePart1;

          // Buat elemen p untuk bagian kedua
          const part2 = document.createElement('p');
          part2.textContent = titlePart2;

          // Tambahkan kedua elemen p ke dalam elemen title
          title.appendChild(part1);
          // title.appendChild(document.createElement('br')); // Tambahkan elemen br di antara bagian pertama dan kedua
          title.appendChild(part2);
      } else {
          title.textContent = drama.title;
      }

      let icon = document.createElement('i')
      icon.classList.add('bx')
      icon.classList.add('bxs-right-arrow')
      icon.style.display = 'none'
     
      box.addEventListener('mouseover', ()=> {
        icon.style.display = 'flex';
      });

      box.addEventListener('mouseout', ()=> {
        icon.style.display = 'none'
      });

      let circle = document.createElement('i');
      circle.classList.add('bx');
      circle.classList.add('bx-x');
      circle.style.display = 'none'
      
      // URL trailer dari drama
      let trailerUrl = drama.trailer;
      let videoId;

      // Fungsi untuk mengambil ID video dari URL YouTube
      function getYoutubeVideoId(url) {
        if (url.includes('youtu.be')) {
          return url.split('/').pop().split('?')[0];
        } else if (url.includes('watch?v=')) {
          return url.split('watch?v=').pop().split('&')[0];
        }
        return null;
      }

      // Event listener pada icon untuk memutar video
      icon.addEventListener('click', ()=> {
        // Hapus iframe sebelumnya jika ada
        if (box.querySelector('iframe')) {
          box.removeChild(box.querySelector('iframe'));
        }

        // Buat iframe baru untuk video yang dipilih
        const iframe = document.createElement("iframe");
        iframe.classList.add('video');
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        iframe.setAttribute("allowfullscreen", true);

        // Ambil video ID dari URL trailer
        videoId = getYoutubeVideoId(trailerUrl);

        // Set sumber iframe untuk video yang dipilih
        iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);

        // Tampilkan iframe dan ikon close, sembunyikan gambar dan judul
        iframe.style.display = 'block';
        circle.style.display = 'block';
        img.style.display = 'none';
        title.style.display = 'none';

        // Tambahkan iframe ke dalam box
        box.appendChild(iframe);
      });

      // Event listener pada icon untuk menutup video
      circle.addEventListener('click', ()=> {
        // Hapus iframe yang sedang ditampilkan
        box.removeChild(box.querySelector('iframe'));

        // Tampilkan kembali gambar dan judul
        img.style.display = 'block';
        title.style.display = 'block';
        circle.style.display = 'none';
      });

      // Memasukkan elemen ke dalam box
      box.appendChild(icon);
      box.appendChild(title);
      box.appendChild(nama);
      box.appendChild(img);
      box.appendChild(circle);
      content.appendChild(box);
    });
  });
