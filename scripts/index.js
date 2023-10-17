let carousel = document.querySelector('.carousel');
let cellCount = 6;
let selectedIndex = 0;

let currect_cell = 1
let currect_company_box = 1

function rotateCarousel() {
var angle = selectedIndex / cellCount * -360;
carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

const changeCarouselTextBox=(n)=>{
    const BOX1 = $(".main__box_1")
    const BOX2 = $(".main__box_2")
    const BOX3 = $(".main__box_3")
    const BOX4 = $(".main__box_4")
    const BOX5 = $(".main__box_5")
    const BOX6 = $(".main__box_6")
    currect_cell +=n
    if(currect_cell==7){
        currect_cell=1
    }
    else if(currect_cell==0){
        currect_cell=6
    }
    if(currect_cell==1){
        BOX1.css("transform", "translateX(0vw)")
        BOX2.css("transform", "translateX(200vw)")
        BOX3.css("transform", "translateX(200vw)")
        BOX4.css("transform", "translateX(200vw)")
        BOX5.css("transform", "translateX(200vw)")
        BOX6.css("transform", "translateX(200vw)")
    }
    else if(currect_cell==2){
        BOX1.css("transform", "translateX(200vw)")
        BOX2.css("transform", "translateX(0vw)")
        BOX3.css("transform", "translateX(200vw)")
        BOX4.css("transform", "translateX(200vw)")
        BOX5.css("transform", "translateX(200vw)")
        BOX6.css("transform", "translateX(200vw)")
    }
    else if(currect_cell==3){
        BOX1.css("transform", "translateX(200vw)")
        BOX2.css("transform", "translateX(200vw)")
        BOX3.css("transform", "translateX(0vw)")
        BOX4.css("transform", "translateX(200vw)")
        BOX5.css("transform", "translateX(200vw)")
        BOX6.css("transform", "translateX(200vw)")
    }
    else if(currect_cell==4){
        BOX1.css("transform", "translateX(200vw)")
        BOX2.css("transform", "translateX(200vw)")
        BOX3.css("transform", "translateX(200vw)")
        BOX4.css("transform", "translateX(0vw)")
        BOX5.css("transform", "translateX(200vw)")
        BOX6.css("transform", "translateX(200vw)")
    }
    else if(currect_cell==5){
        BOX1.css("transform", "translateX(200vw)")
        BOX2.css("transform", "translateX(200vw)")
        BOX3.css("transform", "translateX(200vw)")
        BOX4.css("transform", "translateX(200vw)")
        BOX5.css("transform", "translateX(0vw)")
        BOX6.css("transform", "translateX(200vw)")
    }
    else if(currect_cell==6){
        BOX1.css("transform", "translateX(200vw)")
        BOX2.css("transform", "translateX(200vw)")
        BOX3.css("transform", "translateX(200vw)")
        BOX4.css("transform", "translateX(200vw)")
        BOX5.css("transform", "translateX(200vw)")
        BOX6.css("transform", "translateX(0vw)")
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    const HEADER_ICON = $(".header__icon")
    HEADER_ICON.on("click",()=>{
        const ICON_NAV_BOX = $(".header__nav_box")
        ICON_NAV_BOX.toggleClass("active")
        HEADER_ICON.toggleClass("active")
    })
    
    const PREVBTN_CAROUSEL = $('.previous-button')
    PREVBTN_CAROUSEL.on("click", function() {
        selectedIndex--
        rotateCarousel()
        changeCarouselTextBox(-1)
    })

    const NEXTBTN_CAROUSEL = $('.next-button')
    NEXTBTN_CAROUSEL.on("click", function() {
        selectedIndex++
        rotateCarousel()
        changeCarouselTextBox(1)
    })

    const SLIDER_PARTNERS = $(".form__slider")
})