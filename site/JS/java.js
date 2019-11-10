/*
Date: 10.11.2019
Author: Dmitri Meili
Project: java site
Version: 1.13
 */
document.addEventListener("DOMContentLoaded", init)

function init() { //fontion init pour initialiser les fonctions au moment du chargement de la page
    btHebergement.addEventListener("click", btHebergementClick);
    btTransport.addEventListener("click", btTransportClick);
    btActivite.addEventListener("click", btActiviteClick);
    btParticipant.addEventListener("click", btParticipantClick);
    btConfRes.addEventListener("click", btConfResClick);
    lstChambre.addEventListener("change", lstChambreChange);
    btChecklist.addEventListener("click", btChecklistClick);
    btAjouter.addEventListener("click", btAjouterClick);
    btChangerVue.addEventListener("click", btChangerVueClick);
    btSupp.addEventListener("click", btSuppClick);

    divHebergement.style.display = "none";
    divTransport.style.display = "none";
    divActivite.style.display = "none";
    divParticipant.style.display = "none";
    divChecklist.style.display = "none";

}

function btHebergementClick() { // fonction qui sers a afficher le contenu de la partie Hebergement
    divHebergement.style.display = "inline";
    divTransport.style.display = "none";
    divActivite.style.display = "none";
    divParticipant.style.display = "none";

    divMail.style.display = "none";
}

function btTransportClick() {// fonction qui sers a afficher le contenu de la partie Transport
    divHebergement.style.display = "none";
    divTransport.style.display = "inline";
    divActivite.style.display = "none";
    divParticipant.style.display = "none";
}

function btActiviteClick() {// fonction qui sers a afficher le contenu de la partie Activité
    divHebergement.style.display = "none";
    divTransport.style.display = "none";
    divActivite.style.display = "inline";
    divParticipant.style.display = "none";
}

function btParticipantClick() {// fonction qui sers a afficher le contenu de la partie Participant
    divHebergement.style.display = "none";
    divTransport.style.display = "none";
    divActivite.style.display = "none";
    divParticipant.style.display = "inline";

}

function btConfResClick() {// fonction qui perment d'afficehr le mail de confirmation depuis un document txt
    if (divMail.style.display === "none") {
        divMail.style.display = "inline";
    } else {
        divMail.style.display = "none"
    }


}

function lstChambreChange() {// fonction qui perment d'afficher les info par rapport a chaque chambre
    switch (lstChambre.value) {
        case "1":
            nbOccMax.innerHTML = "5";
            nbOccPrev.innerHTML = "4";
            NumChambre.innerHTML = "1";

            break;
        case "2":
            nbOccMax.innerHTML = "4";
            nbOccPrev.innerHTML = "4";
            NumChambre.innerHTML = "2";
            break;
        case "3":
            nbOccMax.innerHTML = "6";
            nbOccPrev.innerHTML = "6";
            NumChambre.innerHTML = "3";
            break;

    }
}

function btChecklistClick() {//fonction qui permet d'afficher la Checklist d'arrivé/départ
    if (divChecklist.style.display === "none") {
        divChecklist.style.display = "block";
    } else {
        divChecklist.style.display = "none";
    }
}

var Eleve;
var inp;
function btAjouterClick() {// fonction qui permet d'ajouter un élève

    if (txtName.value === "") {
        alert("veuillez insérer un prénom");
    } else {
        Eleve = document.createElement("li");


        chk = document.createElement("input");
        chk.type = "checkbox";
        lbl= document.createElement("label");
        lbl.innerText=txtName.value;

        ListeEleve.appendChild(Eleve);
        Eleve.appendChild(chk);
        Eleve.appendChild(lbl);



        ListeEleve.appendChild(Eleve);



    }
}

function btChangerVueClick() {// fonction qui permet d'afficher tous les élèves avec leurs informations
    if (divChambres.style.display === "none") {
        divChambres.style.display = "block";
        TableChangerVue.classList.add("d-none");

    } else {
        divChambres.style.display = "none";
        TableChangerVue.classList.remove("d-none");
    }

}

function btSuppClick() {// fonction qui permet de supprimer un élève

    for (i = ListeEleve.children.length-1; i >= 0 ; i--) {
        Eleve = ListeEleve.children[i];
        console.log(ListeEleve.children[i]);
        inp = Eleve.firstChild;
        console.log(inp);

            if (inp.checked) {
                Eleve.parentNode.removeChild(Eleve);
            }


    }



}
