const btnOperateur = document.querySelectorAll(".payments button");
const paybay = document.querySelector(".payby");
let operateur = localStorage.getItem("operateur")|| "orange";

paybay.textContent += " " + operateur.toUpperCase();

btnOperateur.forEach(boutton =>{
    boutton.addEventListener("click",()=>{
        localStorage.setItem("operateur", boutton.value);
        location.reload();
    })
});
console.log(operateur);
const or = document.querySelector("#or");
const mv = document.querySelector("#mv");
const art = document.querySelector("#art");

if(operateur === "orange"){
    or.className = "select"
}else if(operateur === "mvola"){
    mv.className = "select"
} else if (operateur ==="airtel"){
    art.className = "select"
}
const nomDuCompte = document.querySelector("#nom");
const numero = document.querySelector("#numero");
const montant = document.querySelector("#montant");
const btnGetLink = document.querySelector(".obtenir");

let nomSaved = localStorage.getItem("nom");
let numeroSaved = localStorage.getItem("numero");
nomDuCompte.value = nomSaved;
numero.value = numeroSaved;
montant.value = 0;

let nomTab = nomDuCompte.value.split(" ");

const spanLink = document.querySelector(".lien");
btnGetLink.addEventListener("click",()=>{
    localStorage.setItem("nom", nomDuCompte.value);
    localStorage.setItem("numero", numero.value);

    let lien = `https://bootikapay.byethost14.com/e-faignyPay/index2.php?nom=${nomTab.join("%")}&&num=${numero.value}&&mont=${montant.value}&&op=${operateur}`;
    spanLink.textContent = lien;

});

console.log(nomSaved);
console.log(numeroSaved);

//Button copier le lien

const btnCopy = document.querySelector("#btn-copier");
btnCopy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(spanLink.textContent)
    .then(()=>{btnCopy.textContent = "Copié"})
    .catch(error=>{btnCopy.textContent ="error",error});
})
  
