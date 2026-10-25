let client = "Awa";
let montant = 3000;
let codePlat = 2;
let quantité = Number("2");
let prixUnitaire = 0;
switch (codePlat) {
    case 1:
        prixUnitaire = 1500;
        break;
    case 2:
        prixUnitaire = 2000;
        break;
    case 3:
        prixUnitaire = 1000;
        break;
    default:
        throw new Error("Code plat inconnu");
};
function calculerTotal(prixUnitaire, quantité) {
    return prixUnitaire * quantité;
}
let total = calculerTotal(prixUnitaire, quantité);
let portion = 1;

for (portion = 1; portion <= quantité; portion++) {
    console.log(`La portion est : ${portion}`);
}
console.log(`Nom du client est: ${client} et le total à payer est : ${total}`);
let Monaie = montant - total;
if (montant > total) {
    console.log(`votre monaie est : ${Monaie} FCFA, Merci d'etre passé(e) à bientot!!! `);
} else if (montant === total) {
    console.log(`Votre compte est exact : ${Monaie} FCFA, Merci d'etre passé(e) à bientot!!!`);
} else {
    console.log(`vous devez ${Math.abs(Monaie)} FCFA, Merci de regler avant de sortir`);
};
