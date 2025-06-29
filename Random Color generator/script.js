
let color = document.querySelector(".main");
let code = document.querySelector(".code");
let text = document.querySelector(".heading")

function getshow(){
    code.style.display = "flex";
}
function getcolor(){
    const randomnum = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randomnum.toString(16);
    color.style.backgroundColor = randomcode;
    text.style.color = randomcode;
    code.innerHTML = randomcode;
    navigator.clipboard.writeText(randomcode);
}

let i = 1;
function get(){
    if(i==1){
        getshow();
        getcolor();
        i++;
    }
    else{
        getcolor();
    }
}
