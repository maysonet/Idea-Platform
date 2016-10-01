var yPos;
function yScroll(){


  pagetop = document.getElementById('pagetop');

  yPos = window.pageYOffset;
  if(yPos > 120){

    pagetop.style.backgroundColor = "#06c";


  } else{
    pagetop.style.backgroundColor = "transparent";
    pagetop2.style.backgroundColor = "transparent";


  }
}
window.addEventListener("scroll", yScroll);
