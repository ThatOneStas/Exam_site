let carousel = document.querySelector('.carousel');
let cellCount = 6;
let currectCell = 1
let selectedIndex = 0;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

const PREVBTN = document.querySelector('.previous-button');
PREVBTN.addEventListener( 'click', function() {
  selectedIndex--;
  currectCell -=1
  rotateCarousel();
});

const NEXTBTN = document.querySelector('.next-button');
NEXTBTN.addEventListener( 'click', function() {
  selectedIndex++;
  currectCell +=1
  rotateCarousel();
});