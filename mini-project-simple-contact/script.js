// DOM Traversal

const container = document.querySelectorAll('.card')
const hapus = document.querySelectorAll('.close')

// Cara ke 1 = Menggunakan forEach agar tidak usah menentukan iterator nya & lebih simple

hapus.forEach(function(el) { 
    el.addEventListener('click' ,function(e) {
        e.target.parentElement.style.display = 'none' // Menatgetkan Element Parent dari semua class 'close'
    }) // Menghapus display css 
})

// Cara ke 2 = Menggunakan Looping

// for(let i = 0; i < hapus.length; i++) { // Loping semua variabel hapus nya
//         hapus[i].addEventListener('click', function(e) { // Jika function di isi parameter (e), Maka ini berisi informasi yang sedang terjadi

//             e.target.parentElement.style.display = 'none' // Cara 2 : menargetkan variabel hapus yang berisi '.close'
//             hapus[i].parentElement.style.display = 'none' // Cara 1 = Ambil element hapus & Panggil element parent lalu hapus display nya
//     })
// }
// 
// const nama = document.querySelector('.nama')
// console.log(nama.parentElement.parentElement)  // Untuk mengambil si kakek
// console.log(nama.nextElementSibling.nextElementSibling) // Untuk melihat element kembaran nya