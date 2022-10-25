const text = document.querySelector(".anim-text");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onclick, 50);

function onclick(){
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if(char == splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}