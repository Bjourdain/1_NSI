let pieces=[200, 100, 50, 20, 10, 5];
let piecesRendues=[];
let montantRecu=0;
let montantAttendu=0;
let montantRendu=0;

let Initialisation=function (){
	document.getElementById("selection").value = "";
	document.getElementById("fournie").value = "";
	document.getElementById("demande").value = "";
	document.getElementById("commande").value = "Non commandée";
	document.getElementById("valider").disabled = true;
	document.getElementById("p1").disabled = true;
	document.getElementById("p2").disabled = true;
	document.getElementById("p3").disabled = true;
	document.getElementById("p4").disabled = true;
	document.getElementById("p5").disabled = true;
	document.getElementById("p6").disabled = true;
}();

function commande(){
		document.getElementById("commande").value = "Commandée";
		document.getElementById("encours").innerHTML= "Votre commande est en préparation.";
		let choix=document.getElementsByName('produit');
		let valeur;
		for(let i = 0; i < choix.length; i++){
			if(choix[i].checked){
				valeur = choix[i].value;
			}
		}
		document.getElementById("demande").value = valeur;
		switch(valeur){
		case"2.50":
			plat="Hamburger";
			break;
		case"2.95":
			plat="Crudités";
			break;
		case"2.75":
			plat="Hot dog";
			break;
		case"1.50":
			plat="Kebab";
			break;
		}
		document.getElementById("selection").value = plat;
		montantAttendu=parseInt(valeur*100);
		document.getElementById("valider").disabled = false;
		document.getElementById("p1").disabled = false;
		document.getElementById("p2").disabled = false;
		document.getElementById("p3").disabled = false;
		document.getElementById("p4").disabled = false;
		document.getElementById("p5").disabled = false;
		document.getElementById("p6").disabled = false;
		document.getElementById("commander").disabled = true;
}

function ajoutePiece(value){
	montantRecu+=value;
	document.getElementById("fournie").value = montantRecu/100;

}

function renduMonnaie(){
	// votre code ici
	
	let nbPieces=piecesRendues.length;
	document.getElementById("encours").innerHTML= "Je vous rends "+nbPieces+" pièce(s)";
	document.getElementById("monnaie").innerHTML= piecesRendues;
	console.log(nbPieces);
	console.log(piecesRendues);
	document.getElementById("valider").disabled = true;
	document.getElementById("commander").disabled = true;
	document.getElementById("p1").disabled = true;
	document.getElementById("p2").disabled = true;
	document.getElementById("p3").disabled = true;
	document.getElementById("p4").disabled = true;
	document.getElementById("p5").disabled = true;
	document.getElementById("p6").disabled = true;
}
