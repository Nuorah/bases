var formationJS = {
	nom: 'Module JavaScript',
	langage: 'JavaScript',
	dateDebut: '01/09/2017',
	dateFin: '05/09/2017',
	stagiaires : [{
		nom: 'Nom Exemple',
		prenom: 'Prenom Exemple'
	}
	]
}

console.log(formationJS.nom);
console.log(formationJS.dateDebut);
console.log(formationJS.dateFin);

formationJS.formateur = {
	nom : 'Hodicq',
	prenom: 'Nicolas'
}

console.log(formationJS.formateur.nom);