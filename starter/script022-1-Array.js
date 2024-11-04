/*****************************
 * 022 - Les tableaux indicés (Arrays)
 */

// 1. Initialiser un nouveau tableau
// EXERCICE 1 : Créez un tableau appelé "semaine" qui contient les noms des jours de la semaine

const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

// 2. Accéder à un élément du tableau
// EXERCICE 2 : Affichez le premier jour de la semaine et le dernier jour de la semaine en utilisant les indices du tableau

console.log(jours[0], jours[1]);

// 3. Nombre d'éléments dans un tableau
// EXERCICE 3 : Affichez le nombre de jours dans une semaine et le dernier jour de la semaine

console.log(jours.length);

// 4. Modifier les données d'un tableau
// EXERCICE 4 : Modifiez "samedi" en "saturday", réaffichez le tableau, stockez "dimanche" dans une variable jourFerie, affichez le contenu de la variable, ajoutez un nouveau jour, "dimanche2", à la fin de la semaine, puis réaffichez le tableau des jours de la semaine.

jours[5] = 'jour ferié';
console.table(jours);

// 5. Un tableau peut contenir des données de différents types

const mesElements = [1, 'salut', true]; // ne pas faire ce genre de chose
console.table(mesElements)// ne pas faire ce genre de chose

// 6. Méthodes associées à un tableau

// push => ajouter à la fin
//unshift => ajouter au debut
// forEach => parcourir chacun des éléments du tableaux

// EXERCICE 5 : Suivez les consignes pour manipuler le tableau de fruits
