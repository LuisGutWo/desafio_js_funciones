const pic1 = document.querySelector("#pic1");
const pic2 = document.querySelector("#pic2");
const pic3 = document.querySelector("#pic3");
const pic4 = document.querySelector("#pic4");

pic1.style.backgroundColor = "black";
pic2.style.backgroundColor = "green";
pic3.style.backgroundColor = "blue";
pic4.style.backgroundColor = "yellow";

function cambiarColorA() {
    pic1.style.backgroundColor = "purple";
    pic2.style.backgroundColor = "violet";
    pic3.style.backgroundColor = "brown";
    pic4.style.backgroundColor = "grey";
}
function cambiarColorS() {
    pic1.style.backgroundColor = "yellow";
    pic2.style.backgroundColor = "brown";
    pic3.style.backgroundColor = "black";
    pic4.style.backgroundColor = "red";
}
function cambiarColorD() {
    pic1.style.backgroundColor = "pink";
    pic2.style.backgroundColor = "grey";
    pic3.style.backgroundColor = "purple";
    pic4.style.backgroundColor = "blue";
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        cambiarColorA();
    }
    if (event.key === 's') {
        cambiarColorS();
    }
    if (event.key === 'd') {
        cambiarColorD();
    }
})

pic1.addEventListener('click', () => {
    pic1.style.background = "blue";
});
pic2.addEventListener('click', () => {
    pic2.style.background = "violet";
});
pic3.addEventListener('click', () => {
    pic3.style.background = "purple";
});
pic4.addEventListener('click', () => {
    pic4.style.background = "pink";
});