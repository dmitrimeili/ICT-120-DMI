document.addEventListener("DOMContentLoaded", init)

function init() {
    btHebergement.addEventListener("click", btHebergementClick);
    btTransport.addEventListener("click", btTransportClick);
    btActivite.addEventListener("click", btActiviteClick);
    btParticipant.addEventListener("click",btParticipantClick);


}

function btHebergementClick() {
    divHebergement.style.visibility='visible';
    divTransport.style.visibility='hidden';
    divActivite.style.visibility='hidden';
    divParticipant.style.visibility='hidden';
}

function btTransportClick(){
    divHebergement.style.visibility='hidden';
    divTransport.style.visibility='visible';
    divActivite.style.visibility='hidden';
    divParticipant.style.visibility='hidden';
}

function btActiviteClick(){
    divHebergement.style.visibility='hidden';
    divTransport.style.visibility='hidden';
    divActivite.style.visibility='visible';
    divParticipant.style.visibility='hidden';
}
function btParticipantClick() {
    divHebergement.style.visibility='hidden';
    divTransport.style.visibility='hidden';
    divActivite.style.visibility='hidden';
    divParticipant.style.visibility='visible';

}

