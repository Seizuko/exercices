var nom;
var prenom;
var ville;
var age;
var sexe;
var nationalite;

alert("Exercice P1 (Ne pas tenir compte de ce message !");

prenom = prompt("Quel est votre prenom");
alert('Bonjour '+prenom);

age = prompt("Quel age avez vous ?");
if (age < 18) {
	alert("Vous êtes mineur.");
}
else {
	alert("Vous êtes majeur.");
}


alert("Exercice partie 2");

prenom = prompt("Quel est votre prenom");
nom = prompt("Quel est votre nom");
ville = prompt("Quelle ville habitez vous ?");

alert('Nom: '+nom+ '\nPrenom: '+prenom+ '\nVille: '+ville);


