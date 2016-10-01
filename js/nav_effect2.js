var yPos;
function yScroll(){


  pagetop = document.getElementById('pagetop2');

  yPos = window.pageYOffset;
  if(yPos > 120){

    pagetop.style.backgroundColor = "#06c";


  } else{

    pagetop.style.backgroundColor = "transparent";


  }
}
window.addEventListener("scroll", yScroll);
