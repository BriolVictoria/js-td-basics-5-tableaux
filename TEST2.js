/** 023 - TABLEAUX - CODING CHALLENGE 3
 *!/
 // 1. Créez un tableau appelé 'factures' contenant les trois montants des factures.
 // 2. Créez une fonction appelée 'calculateurPourboire' prenant une facture comme argument.
 // 3. À l'intérieur de la fonction 'calculateurPourboire', utilisez des instructions conditionnelles pour calculer le pourboire en fonction du montant de la facture.
 //    - Si la facture est inférieure à $50, calculez 20% de la facture.
 //    - Si la facture est entre $50 et $200, calculez 15% de la facture.
 //    - Si la facture est supérieure à $200, calculez 10% de la facture.
 // 4. La fonction 'calculateurPourboire' devrait renvoyer le montant du pourboire.
 // 5. Créez un tableau vide appelé 'pourboires'.
 // 6. Créez un autre tableau vide appelé 'montantsFinaux'.
 // 7. Utilisez la fonction 'calculateurPourboire' pour calculer les pourboires pour chaque facture du tableau 'factures' et ajoutez-les au tableau 'pourboires'.
 // 8. Pour chaque facture, calculez le montant final payé en ajoutant le montant de la facture au montant du pourboire, puis ajoutez-le au tableau 'montantsFinaux'.
 // 9. Affichez les tableaux 'pourboires' et 'montantsFinaux' dans la console pour voir les résultats.*/


const factures = [100, 74, 199];

function calculateurPourboire(facture) {
    let pourboires=[]
    if (facture < 50){
        pourboires.push=(facture /20)
    } else if (facture < 50 && facture <200)
}


/*
TABLEAUX - PRÉPA 2 : Somme des valeurs
1. Initialisez un tableau qui contient les nombres 11, 3, 7, 2, 9 et 10.
2. Affichez le tableau (précédé du texte : "Voici mon tableau de nombres :").
3. Calculez puis affichez la somme des valeurs du tableau 'nombres' :
   - Utilisez la méthode 'forEach()' pour afficher la somme des nombres dans le tableau (précédée du texte : "La somme des nombres de mon tableau est …").
   - Utilisez une boucle 'for/of' pour faire la même chose.

Version alternative (avec BONUS) :
1. Initialisez
   - une variable 'message' à une chaîne vide ;
   - une variable 'somme' à 0.
2. Parcourez votre tableau de nombres à l'aide d'une boucle 'for' pour construire le message : "… + … + … = ".
3. Parcourez votre tableau de nombres à l'aide d'une boucle 'for/of' pour calculer la somme des valeurs du tableau.
4. Affichez le message final : "… + … + … = …".
*/

const nombres = [11, 3, 7, 2, 9, 10];
console.log('Voici mon tableau de nombres :')
console.log(nombres)

let somme = 0;

nombres.forEach(nombre => {
    somme += nombre;
    return somme;
});

console.log(somme)


let somme2 = 0;

for (const nombre of nombres) {
    somme2 += nombre
}

console.log(somme2)