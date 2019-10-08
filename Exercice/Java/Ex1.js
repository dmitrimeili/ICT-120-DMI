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
    div4.addEventListener("click", yes);
    div5.addEventListener("click", divdestroy);
    div6nom.addEventListener("keyup", divpass);
    avm.addEventListener("click",avmClick);


}
partez.style.display="none";


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
        div.style.backgroundColor = "greenyellow"
        div.style.color = "white"
        document.getElementById("div4demi").appendChild(div);
    }

}

function divdestroy() {
    div5demi.parentNode.removeChild(div5demi);
}

function divpass() {
    var x;
    var initiales;
    var initiales2;
    var initiales3;

    initiales = div6nom.value.substr(0, 1);
    x = div6nom.value.lastIndexOf(" ");
    initiales2 = div6nom.value.substr(x + 1, 1);
    x = div6nom.value.length;
    initiales3= initiales+initiales2+div6nom.value.substr(x - 1, 1);
   div6initiales.value = initiales3.toUpperCase();

}

function avmClick() {
    document.getElementById("avm").disabled= true;
    document.getElementById("pret").disabled=false;
    partez.style.display="inline";

    img1.src="images/marks.png";
}