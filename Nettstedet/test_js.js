var petanque=0;
var gokart=0;
var orientering=0;
var bueskytting=0;
var strikking=0;
var matfoto=0;
var bridge=0;
var flyspotting=0;
var spmTeller=5;
var sportEllerHobby;

function svarA(){ // Klikk på knapp A (til venstre)

		if (spmTeller==5) {
			spmPoeng(3,3,3,3,0,0,0,0); // pet, gok, ori, bue, stri, matf, bri, spot
			spmHTML("Sport", "Inne", "Hobby", "Ute", " 1", " 2"); // PASS PÅ SPACE ETTER 1 FOR AT DET SKAL FUNKE, MOGELEG Å LESE inn SPACE-EN i staden? SPØR FAGFOLK! forrigeTekstInnA, nyTekstInnA, forrigeTekstInnB, nyTekstInnB, forrigeOverskrift, nyOverskrift // <-- HAR PRØVD Å ENDRE DENNE, SJÅ LENGER NED
			spmTeller++;
			sportEllerHobby="sport";			
		}
		
			else if (spmTeller==6) {
				spmPoeng(0,1,0,1,2,2,2,0);
				spmHTML("Inne", "Alene", "Ute", "Sosialt", " 2", " 3"); // PASS PÅ SPACE ETTER 1 FOR AT DET SKAL FUNKE, MOGELEG Å LESE inn SPACE-EN i staden? SPØR FAGFOLK! forrigeTekstInnA, nyTekstInnA, forrigeTekstInnB, nyTekstInnB, forrigeOverskrift, nyOverskrift // <-- HAR PRØVD Å ENDRE DENNE, SJÅ LENGER NED
				spmTeller++;
			}

			// Hvis sport først, frå klikk 3

			else if (spmTeller==7 && sportEllerHobby=="sport") {
				spmPoeng(0,1,2,1,2,2,0,1);
				spmHTML("Alene", "Konsentrasjon", "Sosialt", "Kondisjon", " 3", " 4");
				spmTeller++;
			}

			else if (spmTeller==8 && sportEllerHobby=="sport") {
				spmPoeng(2,2,1,3,0,0,0,0);
				spmHTML("Konsentrasjon", "Lavt budsjett", "Kondisjon", "Høyt budsjett", " 4", " 5");
				spmTeller++;
			}
			
			else if (spmTeller==9 && sportEllerHobby=="sport") {
				spmPoeng(3,0,2,0,0,0,0,0);
				spmTeller++;
				aktivitetar();
				resultatPrint();
			}		

			//Hvis hobby først, frå klikk 3

			else if (spmTeller==7 && sportEllerHobby=="hobby") {
				spmPoeng(0,1,2,1,2,2,0,1);
				spmHTML("Alene", "Kos", "Sosialt", "Spenning", " 3", " 4");
				spmTeller++;
			}

			else if (spmTeller==8 && sportEllerHobby=="hobby") {
				spmPoeng(0,0,0,0,2,2,1,1);
				spmHTML("Kos", "Kreativ", "Spenning", "Tålmodig", " 4", " 5");
				spmTeller++;
			}
			else if (spmTeller==9 && sportEllerHobby=="hobby") {
				spmPoeng(0,0,0,0,2,2,0,1);
				spmTeller++;
				aktivitetar();
				resultatPrint();
			}				
}

	function svarB(){ // Klikk på knapp B (til høgre)
		if (spmTeller==5) {
				spmPoeng(0,0,0,0,3,3,3,3); // pet, gok, ori, bue, stri, matf, bri, spot
				spmHTML("Sport", "Inne", "Hobby", "Ute", " 1", " 2"); // PASS PÅ SPACE ETTER 1 FOR AT DET SKAL FUNKE, MOGELEG Å LESE inn SPACE-EN i staden? SPØR FAGFOLK! forrigeTekstInnA, nyTekstInnA, forrigeTekstInnB, nyTekstInnB, forrigeOverskrift, nyOverskrift // <-- HAR PRØVD Å ENDRE DENNE, SJÅ LENGER NED
				spmTeller++;
				sportEllerHobby="hobby";
			}
		
			else if (spmTeller==6) {
				spmPoeng(2,2,2,2,1,0,0,2);
				spmHTML("Inne", "Alene", "Ute", "Sosialt", " 2", " 3"); // PASS PÅ SPACE ETTER 1 FOR AT DET SKAL FUNKE, MOGELEG Å LESE inn SPACE-EN i staden? SPØR FAGFOLK! forrigeTekstInnA, nyTekstInnA, forrigeTekstInnB, nyTekstInnB, forrigeOverskrift, nyOverskrift // <-- HAR PRØVD Å ENDRE DENNE, SJÅ LENGER NED			spmTeller++;
				spmTeller++;
			}

			// Hvis sport først, frå klikk 3

			else if (spmTeller==7 && sportEllerHobby=="sport") {
				spmPoeng(2,2,2,2,0,0,0,0);
				spmHTML("Alene", "Konsentrasjon", "Sosialt", "Kondisjon", " 3", " 4"); // PASS PÅ SPACE ETTER 1 FOR AT DET SKAL FUNKE, MOGELEG Å LESE inn SPACE-EN i staden? SPØR FAGFOLK! forrigeTekstInnA, nyTekstInnA, forrigeTekstInnB, nyTekstInnB, forrigeOverskrift, nyOverskrift // <-- HAR PRØVD Å ENDRE DENNE, SJÅ LENGER NED			spmTeller++;
				spmTeller++;
			}
				
			else if (spmTeller==8 && sportEllerHobby=="sport") {
				spmPoeng(0,1,3,0,0,0,0,0);
				spmHTML("Konsentrasjon", "Lavt budsjett", "Kondisjon", "Høyt budsjett", " 4", " 5"); // PASS PÅ SPACE ETTER 1 FOR AT DET SKAL FUNKE, MOGELEG Å LESE inn SPACE-EN i staden? SPØR FAGFOLK! forrigeTekstInnA, nyTekstInnA, forrigeTekstInnB, nyTekstInnB, forrigeOverskrift, nyOverskrift // <-- HAR PRØVD Å ENDRE DENNE, SJÅ LENGER NED			spmTeller++;
				spmTeller++;
			}
			
			else if (spmTeller==9 && sportEllerHobby=="sport") {
				spmPoeng(0,3,0,3,0,0,0,0);
				spmTeller++;
				aktivitetar();
				resultatPrint();
			}		

			// Hvis hobby først, frå klikk 3

			else if (spmTeller==7 && sportEllerHobby=="hobby") {
				spmPoeng(0,0,0,0,1,0,2,2);
				spmHTML("Alene", "Kos", "Sosialt", "Spenning", " 3", " 4");
				spmTeller++;
			}			

			else if (spmTeller==8 && sportEllerHobby=="hobby") {
				spmPoeng(0,0,0,0,0,0,1,2);
				spmHTML("Kos", "Kreativ", "Spenning", "Tålmodig", " 4", " 5");
				spmTeller++;
			}

			else if (spmTeller==9 && sportEllerHobby=="hobby") {
				spmPoeng(0,0,0,0,2,1,1,2);
				spmTeller++;
				aktivitetar();
				resultatPrint();
			}			
}			

function spmPoeng(pet, gok, ori, bue, stri, matf, bri, spot){ // Sport // NY FORENKLA FUNKSJON HER OGSÅ
		petanque+=pet;
		gokart+=gok;
		orientering+=ori;
		bueskytting+=bue;
		strikking+=stri;
		matfoto+=matf;
		bridge+=bri;
		flyspotting+=spot;	
}

// TEK INN TEKST OG SPYTTAR UT RIKTIG, SLIK AT EG KAN GJENBRUKE KODA -- kopier til andre funksjonane
function spmHTML(forrigeTekstInnA, nyTekstInnA, forrigeTekstInnB, nyTekstInnB, forrigeOverskrift, nyOverskrift){

		var strengA = document.getElementById("spmSvarA").innerHTML; 
		var endraTekstA = strengA.replace(forrigeTekstInnA,nyTekstInnA);
		document.getElementById("spmSvarA").innerHTML=endraTekstA;

		var strengB = document.getElementById("spmSvarB").innerHTML; 
		var endraTekstB = strengB.replace(forrigeTekstInnB,nyTekstInnB);
		document.getElementById("spmSvarB").innerHTML=endraTekstB;

		var strengC = document.getElementById("testOverskrift").innerHTML; 
		var endraTekstA = strengC.replace(forrigeOverskrift,nyOverskrift);
		document.getElementById("testOverskrift").innerHTML=endraTekstA;		
		}

// Utrekning av beste aktivitet -- denne funkar som berre juling	
function aktivitetar(){

var aktivitetar=[];
	aktivitetar[0]={navn:"petanque",poeng:petanque,url:""}
	aktivitetar[1]={navn:"gokart",poeng:gokart,url:""}
	aktivitetar[2]={navn:"orientering",poeng:orientering,url:""}
	aktivitetar[3]={navn:"bueskytting",poeng:bueskytting,url:""}
	aktivitetar[4]={navn:"strikking",poeng:strikking,url:""}
	aktivitetar[5]={navn:"matfoto",poeng:matfoto,url:""}
	aktivitetar[6]={navn:"bridge",poeng:bridge,url:""}
	aktivitetar[7]={navn:"flyspotting",poeng:flyspotting,url:""}

		// Sortering etter høgste sum:
		aktivitetar.sort(function(en, to){
		return to.poeng-en.poeng;
		})

	return [aktivitetar[0].navn,aktivitetar[1].navn,aktivitetar[2].navn,aktivitetar[3].navn,aktivitetar[4].navn,aktivitetar[5].navn,aktivitetar[6].navn,aktivitetar[7].navn];
}

// Printing av resultat
	function resultatPrint(){

	var aktArray = aktivitetar();
	var akt1st = aktArray[0];
	var akt2nd = aktArray[1];
	var akt3rd = aktArray[2];
	var akt4th = aktArray[3];
	var akt5th = aktArray[4];
	var akt6th = aktArray[5];
	var akt7th = aktArray[6];
	var akt8th = aktArray[7];

		document.getElementById("spmSvarA").style.display="none";
		document.getElementById("spmSvarB").style.display="none";
		document.getElementById("resID").style.display="block";
		document.getElementById("resOversikt").style.display="block";

		var strengC = document.getElementById("testOverskrift").innerHTML; 
		var endraTekstA = strengC.replace("Test: Spørsmål 5", "Resultat");
		document.getElementById("testOverskrift").innerHTML=endraTekstA;

		var strengD = document.getElementById("resID").innerHTML; 
		var endraTekstD = strengD.replace("","Aktiviteten som passer best for deg, er "+akt1st+".");
		document.getElementById("resID").innerHTML=endraTekstD;

		var strengE = document.getElementById("resOversikt").innerHTML; 
		var endraTekstE = strengE.replace("","Resultat:<br /><br />"+akt1st+"<br />"+akt2nd+"<br />"+akt3rd+"<br />"+akt4th+"<br />"+akt5th+"<br />"+akt6th+"<br />"+akt7th+"<br />"+akt8th);
		document.getElementById("resOversikt").innerHTML=endraTekstE;
	}