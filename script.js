let mainImage = document.querySelector(".main-image img")
let sliderImage = document.querySelectorAll(".slider-image img")


sliderImage.forEach((item) => {
    item.addEventListener("click", function (e) {
        let imgSrc = e.target.getAttribute('src')
        mainImage.setAttribute('src', `${imgSrc}`)
    })
})



