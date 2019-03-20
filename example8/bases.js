function Personne(nom, prenom, age){
	this.nom = nom;
	this.prenom = prenom;
	this.age = age;
}

function Stagiaire(nom, prenom, age, connaissances){
	Personne.call(this, nom, prenom, age);
	this.connaissances = connaissances;
}

Stagiaire.prototype = new Personne();
Stagiaire.prototype.constructor = Stagiaire;

var stagiaire = new Stagiaire("Moatassime", "Haroun", 30, "Rien");

console.log(stagiaire instanceof Stagiaire);
console.log(stagiaire instanceof Personne);
console.log(stagiaire instanceof Object);