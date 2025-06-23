let count = 0;

const display = document.getElementById("H1");


function h1change(){
    count++
    display.innerHTML= count; 
}
function h2change(){
    count--
    display.innerHTML= count;
}

