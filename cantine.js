let client = "Awa";
const montant = 5000;
let codePlat = 1;
let quantité = Number("5");
let prixUnitaire = 0;
switch (codePlat) {
    case codePlat = 1:
        prixUnitaire = 1500;
        break;
    case codePlat = 2:
        prixUnitaire = 2000;
        break;
    case codePlat = 3:
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

