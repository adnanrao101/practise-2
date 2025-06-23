let count = 0;

const hoo = document.getElementById("H1");
const hoo2 = document.getElementById("H2");

function h1change(){
    count++
    hoo.innerHTML= count; 
}
function h2change(){
    count--
    hoo2.innerHTML= count;
}

