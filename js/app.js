$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})


const searchButton = document.querySelector("#searchButton")
const searchIcon = document.querySelector("#searchButton i")
function activeSearch(){
    searchButton.classList.toggle("searchActive")
    searchIcon.classList.toggle("searchActive")
}
searchButton.addEventListener("click", activeSearch)


const menuMobile = document.querySelector(".menu-mobile")
const navegar = document.querySelector("li#navegar").firstChild
menuMobile.classList.remove("ativo")
navegar.addEventListener("click", ()=>{
    menuMobile.classList.toggle("ativo")
});