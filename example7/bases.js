function Formation (nom, langage, dateDebut, dateFin, stagiaires) {
	this.nom = nom ;
	this.langage = langage;
	this.dateDebut = dateDebut;
	this.dateFin = dateFin;
	this.stagiaires = stagiaires;
}

var formation = new Formation('Module JavaScript', 'javaScript', "01/09/2017", "05/09/2017",
	[{
		nom: 'Nom Exemple',
		prenom: 'Prenom Exemple'
	}]);

console.log(formation.nom);
console.log(formation.langage);
console.log(formation.dateDebut);
console.log(formation.dateFin);