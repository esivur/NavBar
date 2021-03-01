const hamburgerIcon = document.querySelector(".hamburger--container")
const navbar = document.querySelector(".navbar")

// adding a class named change to nav bar 
hamburgerIcon.addEventListener("click", function(){
    navbar.classList.toggle("change")
})



