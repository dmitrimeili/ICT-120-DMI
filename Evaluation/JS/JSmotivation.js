/*
program : EXA 120 motivation
Name : Dmitri Meili
Version : 1.0
Date : 15.11.2019
 */
document.addEventListener("DOMContentLoaded", init);

function init() {

    SpPrenom=window.location.search?txtPrenom:"";//je n'absolument pas compris comment fonction cela


divTropCourt.style.display="none";
textarea.addEventListener("keyup",textareaChange);
}

function textareaChange(){//affiche le message d'erreur si il n'y a pas assé de caractere
    if(textarea.value.length<=30){
        divTropCourt.style.display="block";
    }
    else{
        divTropCourt.style.display="none";
    }
    if(textarea.value.length>144){// est sensé effacer les caractere si on dépasse le nombre max
        delete textarea.lastIndex;
    }
    //j'ai essayer d'afficher le le nombre de caractere restant
    var x = textarea.value.length;
    SpCaractere.value=144-x;
}