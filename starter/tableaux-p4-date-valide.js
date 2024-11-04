/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/

function isBissextile(annee) {
    if (annee % 4 === 0 && annee % 400 === 0 && annee % 100 !== 0) {
        return true;
    } else {
        return false
    }
}

function isValid(day, month, annee) {
    if (!isNaN(annee)) {
        if (month >= 1 && month <= 12) {
            if (day >= 1 && day <= 31) {
                return true;
            }
        }
    } else {
        return false;
    }
}


// Fonction pour vérifier si une année est bissextile
/*function isBissextile(annee) {
    if (isBissextile % 4 ===0 && isBissextile % 100 !==0) {
        return true
    } else if (isBissextile % 400 ===0) {
        return true
    } else {
        return false
    }
}

// Fonction pour vérifier si une date est valide
function isValid(day, month, year) {
    if (isNaN(day) || isNaN(month) || isNaN(year) || day <= 0 || month <= 0 || year <= 0 || month > 12) {
        return false;
    }

    return day > 0 && day <= getMaxDayPerMonth(month, year);
}*/

// Utilisez 'isValid' pour vérifier si une date est valide avant d'afficher un message dans la console

