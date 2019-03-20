function Formation () {
	this.nom = 'Module JavaScript';
	this.langage = 'javaScript';
	this.dateDebut = "01/09/2017";
	this.dateFin = "05/09/2017";
	this.stagiaires = [{
		nom: 'Nom Exemple',
		prenom: 'Prenom Exemple'
	}]
}

var formation = new Formation();

console.log(formation.nom);
console.log(formation.langage);
console.log(formation.dateDebut);
console.log(formation.dateFin);