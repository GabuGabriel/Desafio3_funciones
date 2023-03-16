const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');
const div4 = document.querySelector('#div4');
const colorA ="violet";
const colorS ="grey";
const colorD ="blacka";
var color;



document.addEventListener("keydown", function (event) {
    if (event.key == "a" || event.key == "A") {
        color = "violet";
    } else if (event.key == "s" || event.key == "S") {
        color = "grey";
    } else if (event.key == "d" || event.key == "D") {
        color = "black";
    }
    mc.style.backgroundColor = color;
})


function colorDiv(div){
    div.style.backgroundColor=color;
}

div1.addEventListener("click", function (){
    colorDiv(div1);
});

div2.addEventListener("click", function (){
    colorDiv(div2);
});
div3.addEventListener("click", function (){
    colorDiv(div3);
});
div4.addEventListener("click", function (){
    colorDiv(div4);
});