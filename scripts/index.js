let carousel = document.querySelector('.carousel');
let cellCount = 6;
let currectCell = 1
let selectedIndex = 0;

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
    currectCell +=n
    if(currectCell==7){
        currectCell=1
    }
    else if(currectCell==0){
        currectCell=6
    }
    if(currectCell==1){
        BOX1.css("transform", "translateX(0vw)")
        BOX2.css("transform", "translateX(200vw)")
        BOX3.css("transform", "translateX(200vw)")
        BOX4.css("transform", "translateX(200vw)")
        BOX5.css("transform", "translateX(200vw)")
        BOX6.css("transform", "translateX(200vw)")
    }
    else if(currectCell==2){
        BOX1.css("transform", "translateX(200vw)")
        BOX2.css("transform", "translateX(0vw)")
        BOX3.css("transform", "translateX(200vw)")
        BOX4.css("transform", "translateX(200vw)")
        BOX5.css("transform", "translateX(200vw)")
        BOX6.css("transform", "translateX(200vw)")
    }
    else if(currectCell==3){
        BOX1.css("transform", "translateX(200vw)")
        BOX2.css("transform", "translateX(200vw)")
        BOX3.css("transform", "translateX(0vw)")
        BOX4.css("transform", "translateX(200vw)")
        BOX5.css("transform", "translateX(200vw)")
        BOX6.css("transform", "translateX(200vw)")
    }
    else if(currectCell==4){
        BOX1.css("transform", "translateX(200vw)")
        BOX2.css("transform", "translateX(200vw)")
        BOX3.css("transform", "translateX(200vw)")
        BOX4.css("transform", "translateX(0vw)")
        BOX5.css("transform", "translateX(200vw)")
        BOX6.css("transform", "translateX(200vw)")
    }
    else if(currectCell==5){
        BOX1.css("transform", "translateX(200vw)")
        BOX2.css("transform", "translateX(200vw)")
        BOX3.css("transform", "translateX(200vw)")
        BOX4.css("transform", "translateX(200vw)")
        BOX5.css("transform", "translateX(0vw)")
        BOX6.css("transform", "translateX(200vw)")
    }
    else if(currectCell==6){
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
    
    const PREVBTN = $('.previous-button')
    PREVBTN.on("click", function() {
        selectedIndex--
        rotateCarousel()
        changeCarouselTextBox(-1)
    })

    const NEXTBTN = $('.next-button')
    NEXTBTN.on("click", function() {
        selectedIndex++
        rotateCarousel()
        changeCarouselTextBox(1)
    })
})