document.addEventListener("DOMContentLoaded", init)

function init() {
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

var Eleve;

function btAjouterClick() {

    if (txtName.value === "") {
        alert("veuillez insérer un prénom");
    } else {
        chk = document.createElement("input");
        chk.type = "checkbox";
        Eleve = document.createElement("li");
        Eleve.classList.add("list-group-item");
        Eleve.innerText = txtName.value;
        ListeEleve.appendChild(Eleve);
        Eleve.appendChild(chk);

    }
}

function btChangerVueClick() {
    if (divChambres.style.display === "none") {
        divChambres.style.display = "block";
        TableChangerVue.classList.add("d-none");

    } else {
        divChambres.style.display = "none";
        TableChangerVue.classList.remove("d-none");
    }

}

function btSuppClick() {
    alert(ListeEleve.children.length)
    for (i = 0; i < ListeEleve.children.length; i++) {
        Eleve = ListeEleve.children
        alert(ListeEleve.children[i])
        inp = Eleve.firstChild
        alert(inp)
        if (inp.type == "checkbox") {
            if (inp.checked) {
                Eleve.parentNode.removeChild(Eleve);
            }
        }

    }

    if (Eleve.firstChild.checked == true) {
        Eleve.parentNode.removeChild(Eleve);
    }

}
