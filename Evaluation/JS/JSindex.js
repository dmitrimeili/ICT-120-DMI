/*
program : EXA 120 index
Name : Dmitri Meili
Version : 1.0
Date : 15.11.2019
 */
document.addEventListener("DOMContentLoaded", init);

function init() {
    //ne pas afficher les message d'erreur
    divPrenomcourt.style.display="none";
    divNomcourt.style.display="none";
    divMinCaractere.style.display="none";
    divDiff.style.display="none";

    //initialiser les differentes fonction
    txtPrenom.addEventListener("keyup",txtPrenomChange);
    txtNom.addEventListener("keyup",txtNomChange);
    txtMdp.addEventListener("keyup",txtMdpChange);
    txtMdpConf.addEventListener("keyup",txtMdpConfChange);
    btEnvoyer.addEventListener("click",btEnvoyerClick);


}

function txtPrenomChange() {// active le message d'erreure si le prenom fais 2 caratere ou moins
    if(txtPrenom.value.length<3){
        divPrenomcourt.style.display="inline";
        //j'ai essayer avec la class hidden mais il semblerait que le css n'ait pas envie de fonctionner
        //divPrenomcourt.classList.remove("hidden")
    }else{
        divPrenomcourt.style.display="none";
        //divPrenomcourt.classList.add("hidden")
    }

}
function txtNomChange(){// active le message d'erreure si le nom fais 2 caratere ou moins
    if(txtNom.value.length<3){
        divNomcourt.style.display="inline";
        //divnomcourt.classList.remove("hidden")
    }else{
        divNomcourt.style.display="none";
        //divnomcourt.classList.add("hidden")
    }
}
function txtMdpChange(){// active le message d'erreure si le mot de passe fais 6 caratere ou moins
    if(txtMdp.value.length<7){
        divMinCaractere.style.display="inline";
        //divMinCaractere.classList.remove("hidden")
    }else{
        divMinCaractere.style.display="none";
        //divMinCaractere.classList.add("hidden")
    }
}
function txtMdpConfChange(){//// active le message d'erreure si le mot de passe
    if(txtMdpConf.value!=txtMdp.value){
        divDiff.style.display="inline";
        //divDiff.classList.remove("hidden")
    }
    else{
        divDiff.style.display="none";
        //divDiff.classList.add("hidden")
    }

}
function btEnvoyerClick() {

}