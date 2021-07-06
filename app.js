// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const links = document.querySelector('.links')
const btn= document.querySelector(".nav-toggle")

// console.log(... links.classList)

btn.addEventListener('click', function(){

    links.classList.toggle('show-links');
    console.log(... links.classList);
});