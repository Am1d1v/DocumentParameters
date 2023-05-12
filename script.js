

let box = document.querySelector(".text");
let btn = document.querySelector("button");

//let width = box.clientWidth;
//let height = box.clientHeight;

//let width = box.offsetWidth;
//let height = box.offsetHeight;

let width = box.scrollWidth;
let height = box.scrollHeight;

console.log(width, height)

btn.addEventListener("click", function(){
    //box.style.maxHeight = "600px";
    console.log(box.scrollTop)
});

//console.log(box.getBoundingClientRect());
//console.log(box.getBoundingClientRect().top);

let style = window.getComputedStyle(box);

//console.log(style);
console.log(style[0]);
console.log(style.display);

console.log(document.documentElement.clientWidth);