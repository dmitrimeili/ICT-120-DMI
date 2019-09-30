
div1.addEventListener("click",div1Click)

function div1Click() {

    div1.style.backgroundColor="lightblue"
    div1.style.textDecoration="line-through"
}
div2.addEventListener("click",div2Click)
function div2Click() {
    div1.style.backgroundColor="white"
    div1.style.textDecoration="none"
}
div3.addEventListener("mouseover",div3mouseover)

function div3mouseover(){

        div3.classList.add("csshover")

}