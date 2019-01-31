var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateX("+ angle +"deg); -ms-transform: rotateX("+ angle +"deg); transform: rotateX("+ angle +"deg);");
}