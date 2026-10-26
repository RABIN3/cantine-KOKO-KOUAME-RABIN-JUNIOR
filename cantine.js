let client = "Awa";
let montant = 4000;
let codePlat = 3;
let NamPlat;
let quantité = Number("4");
let prixUnitaire = 0;
switch (codePlat) {
    case 1:
        prixUnitaire = 1500;
        NamPlat = "Attiéké-poisson";
        console.log(`Le plat est ${NamPlat}`);
        console.log(`Le prix unitaire est : 1500 FCFA`);
        break;
    case 2:
        prixUnitaire = 2000;
        NamPlat = "Riz-poulet"
        console.log(`Le plat est ${NamPlat}`);
        console.log(`Le prix unitaire est : 2000 FCFA`);
        break;
    case 3:
        prixUnitaire = 1000;
        NamPlat = "Alloco-œuf"
        console.log(`Le plat est ${NamPlat}`);

        console.log(`Le prix unitaire est : 1000 FCFA`);
        break;
    default:
        console.log("Code plat inconnu. Veuillez choisir un code entre 1 et 3.");
};
if (prixUnitaire > 0) {
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
        console.log(` vous devez une somme de ${Math.abs(Monaie)} FCFA, veuillez vous reduire votre commande`);
    };
}
