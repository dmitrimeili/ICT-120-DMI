document.addEventListener("DOMContentLoaded", init)

function init() {
    btHebergement.addEventListener("click", btHebergementClick);
    btTransport.addEventListener("click", btTransportClick);
    btActivite.addEventListener("click", btActiviteClick);
    btParticipant.addEventListener("click", btParticipantClick);
    btConfRes.addEventListener("click",btConfResClick);
    lstChambre.addEventListener("click",lstChambreClick);
    btChecklist.addEventListener("click",btChecklistClick)

    divHebergement.style.display = "none";
    divTransport.style.display = "none";
    divActivite.style.display = "none";
    divParticipant.style.display = "none";
    divChecklist.style.display="none";

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
    if(divMail.style.display==="none"){
        divMail.style.display="inline";
    }
    else{
        divMail.style.display="none"
    }


}
function lstChambreClick() {

nbOccMax="5";
}

function btChecklistClick() {
    if(divChecklist.style.display==="none"){
        divChecklist.style.display="inline";
    }
    else{
        divChecklist.style.display="none"
    }
}
