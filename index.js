
const colors = ["red","blue","green","orange","Black","#569f3c"];

function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    document.getElementById("three").style.background = colors[random];
};

function changeColor2() {
    let random = Math.floor(Math.random() * colors.length);
    document.getElementById("four").style.background = colors[random];
};