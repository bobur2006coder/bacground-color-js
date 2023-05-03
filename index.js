let one = document.querySelector(".one-box")
let two = document.querySelector(".two-box")
let three = document.querySelector(".three-box")
let btn = document.querySelector(".btn")

function needcolor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

btn.onclick = () => {
    one.style.backgroundColor = "#" + needcolor();
    two.style.backgroundColor = "#" + needcolor();
    three.style.backgroundColor = "#" + needcolor();

}