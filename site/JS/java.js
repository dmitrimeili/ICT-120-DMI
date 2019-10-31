document.addEventListener("DOMContentLoaded", init)

function init() {
    btHebergement.addEventListener("click", btHebergementClick);
    btTransport.addEventListener("click", btTransportClick);
    btActivite.addEventListener("click", btActiviteClick);
    btParticipant.addEventListener("click", btParticipantClick);
    btConfRes.addEventListener("click", btConfResClick);
    lstChambre.addEventListener("change", lstChambreChange);
    btChecklist.addEventListener("click", btChecklistClick);
    btAjouter.addEventListener("click", btAjouterClick)

    divHebergement.style.display = "none";
    divTransport.style.display = "none";
    divActivite.style.display = "none";
    divParticipant.style.display = "none";
    divChecklist.style.display = "none";

}

function btHebergementClick() {
    divHebergement.style.display = "inline";
    divTransport.style.display = "none";
    divActivite.style.display = "none";
    divParticipant.style.display = "none";

    divMail.style.display = "none";
}

function btTransportClick() {
    divHebergement.style.display = "none";
    divTransport.style.display = "inline";
    divActivite.style.display = "none";
    divParticipant.style.display = "none";
}

function btActiviteClick() {
    divHebergement.style.display = "none";
    divTransport.style.display = "none";
    divActivite.style.display = "inline";
    divParticipant.style.display = "none";
}

function btParticipantClick() {
    divHebergement.style.display = "none";
    divTransport.style.display = "none";
    divActivite.style.display = "none";
    divParticipant.style.display = "inline";

}

function btConfResClick() {
    if (divMail.style.display === "none") {
        divMail.style.display = "inline";
    } else {
        divMail.style.display = "none"
    }


}

function lstChambreChange() {
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

function btChecklistClick() {
    if (divChecklist.style.display === "none") {
        divChecklist.style.display = "block";
    } else {
        divChecklist.style.display = "none";
    }
}

function btAjouterClick() {

    if (txtName.value === "") {
        alert("veuillez insérer un prénom");
    } else {
        Eleve = document.createElement("li");
        Eleve.innerText = txtName.value;
        ListeEleve.appendChild(Eleve);
    }
}
