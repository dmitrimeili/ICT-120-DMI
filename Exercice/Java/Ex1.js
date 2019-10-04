/*
program: exercice
Name: Dmitri Meili
Version: 1.2
Date: 04.10.2019
 */
document.addEventListener("DOMContentLoaded", init)

function init() {
    div1.addEventListener("click", div1Click);
    div2.addEventListener("click", div2Click);
    div3.addEventListener("mouseover", div3mouseover);
    div3.addEventListener("mouseleave", div3mouseleave);
    div4.addEventListener("click",yes);
    div5.addEventListener("click",divdestroy);
    div6nom.addEventListener("keyup",divpass);

}


function div1Click() { //fonction pour le premier ex

    div1.style.backgroundColor = "lightblue";
    div1.style.textDecoration = "line-through";
}


function div2Click() {
    div1.style.backgroundColor = "white";
    div1.style.textDecoration = "none";
}


function div3mouseover() {

    div3.classList.add("csshover");

}

function div3mouseleave() {
    div3.classList.remove("csshover");
}

function yes() {
    if (chk1.checked && chk2.checked) {
        //div4.style.display = "none";
        //div4demi.style.display = "block";
        div4.parentNode.removeChild(div4);
       // element=document.createElement("div");
       //element.innerHTML="hello";
        var div = document.createElement("div");
        div.innerHTML = "YES";
        div.style.backgroundColor="greenyellow"
        div.style.color="white"
        document.getElementById("div4demi").appendChild(div);
    }

}
function divdestroy(){
    div5demi.parentNode.removeChild(div5demi);
}
function divpass(){
console.log("hello")
    div6initiales.value=div6nom.value.substring(0,1);

}