/*
Exercice 1 — Length of Last Word

Énoncé :
Étant donnée une chaîne `s` composée de mots et d'espaces, retourner la longueur du dernier mot.
Un mot est une séquence maximale de caractères non-espace.

Contraintes pédagogiques :
- Ne pas utiliser split().
- Faire une boucle en partant de la fin de la chaîne.
*/

function lengthOfLastWord(s) {
  var taille = 0;
  var i = s.length - 1;

  
  while (i >= 0 && s[i] === ' ') {
    i--;
  }

  
  while (i >= 0 && s[i] !== ' ') {
    taille++;
    i--;
  }

  return taille;
}// TODO: écrire ton code ici

  // Astuce (optionnelle) :
  // 1) Ignorer les espaces à la fin
  // 2) Compter les caractères jusqu'au prochain espace ou le début


// --------------------
// Tests (au moins 3)
// --------------------
console.log(lengthOfLastWord("Hello World")); // attendu: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // attendu: 4
console.log(lengthOfLastWord("a")); // attendu: 1 (cas limite)
