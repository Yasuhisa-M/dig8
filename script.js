'use strict'
// Please don't delete the 'use strict' line above

let textElem = document.getElementsByTagName("input")[0];
// textElem[0].value = "100"

let btnElem = document.getElementsByTagName("button")[0];
let bluebox = document.getElementsByTagName("p")[0];
function btnClick() {
    const num = Number(textElem.value);
    for (let i = 0; i < num; i++) {
        bluebox.innerText += "🐊"
    }
}

btnElem.addEventListener('click', btnClick);