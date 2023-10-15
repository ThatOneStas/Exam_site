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

const changeCompanyTextBox=(n,condition)=>{
    const LOGO1 = $(".company__logos_imgs.n1")
    const LOGO2 = $(".company__logos_imgs.n2")
    const LOGO3 = $(".company__logos_imgs.n3")
    const LOGO4 = $(".company__logos_imgs.n4")
    const BOX1 = $(".company__box_1")
    const BOX2 = $(".company__box_2")
    const BOX3 = $(".company__box_3")
    const BOX4 = $(".company__box_4")
    if(!condition){
        currect_company_box += n
        if(currect_company_box==5){
            currect_company_box=1
        }
        else if(currect_company_box==0){
            currect_company_box=4
        }
    }
    else{
        currect_company_box=n
    }
    
    if(currect_company_box==1){
        LOGO1.addClass("active")
        LOGO2.removeClass("active")
        LOGO3.removeClass("active")
        LOGO4.removeClass("active")
        BOX1.addClass("active")
        BOX2.removeClass("active")
        BOX3.removeClass("active")
        BOX4.removeClass("active")
    }
    else if(currect_company_box==2){
        LOGO1.removeClass("active")
        LOGO2.addClass("active")
        LOGO3.removeClass("active")
        LOGO4.removeClass("active")
        BOX1.removeClass("active")
        BOX2.addClass("active")
        BOX3.removeClass("active")
        BOX4.removeClass("active")
    }
    else if(currect_company_box==3){
        LOGO1.removeClass("active")
        LOGO2.removeClass("active")
        LOGO3.addClass("active")
        LOGO4.removeClass("active")
        BOX1.removeClass("active")
        BOX2.removeClass("active")
        BOX3.addClass("active")
        BOX4.removeClass("active")
    }
    else if(currect_company_box==4){
        LOGO1.removeClass("active")
        LOGO2.removeClass("active")
        LOGO3.removeClass("active")
        LOGO4.addClass("active")
        BOX1.removeClass("active")
        BOX2.removeClass("active")
        BOX3.removeClass("active")
        BOX4.addClass("active")
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

    const PREVBTN_COMPANIES = $('.company__box_prev')
    PREVBTN_COMPANIES.on("click", function() {
        changeCompanyTextBox(-1,false)
    })

    const NEXTBTN_COMPANIES = $('.company__box_next')
    NEXTBTN_COMPANIES.on("click", function() {
        changeCompanyTextBox(1,false)
    })

    const LOGO1 = $('.company__logos_imgs.n1')
    LOGO1.on("click", function() {
        changeCompanyTextBox(1,true)
    })
    const LOGO2 = $('.company__logos_imgs.n2')
    LOGO2.on("click", function() {
        changeCompanyTextBox(2,true)
    })
    const LOGO3 = $('.company__logos_imgs.n3')
    LOGO3.on("click", function() {
        changeCompanyTextBox(3,true)
    })
    const LOGO4 = $('.company__logos_imgs.n4')
    LOGO4.on("click", function() {
        changeCompanyTextBox(4,true)
    })
})