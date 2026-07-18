// Technology Glow Animation

const technologies =
document.querySelectorAll(".technology-grid span");

let current = 0;


function glowTechnology(){

technologies.forEach((tech)=>{

tech.style.boxShadow = "none";

});


technologies[current].style.boxShadow =
"0 0 25px #00D4FF";


current++;

if(current >= technologies.length){

current = 0;

}

}


setInterval(glowTechnology,1500);