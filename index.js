
const colors = ["red","blue","green","orange","Black"];

function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    document.getElementById("three").style.background = colors[random];
};
