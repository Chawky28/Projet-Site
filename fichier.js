
        let x = 7 ;
        let y = 10 ;
        let w = 8 ;
		let a ="Hacene Bon goss";
		let b = "gratte moi le cul";
		let c = -20 , d = 40 ;
		let prenom = "Hacene Bon goss";
		let age = 33;
		let reponse = false;
		let resultat = 10 < 6;
		let type = null;
		let result = y % x ;
		const graduation = prenom + b ;
		let h = 0;
		let prez = "bonjour je m'appel Hacene"

        document.getElementById('p1').innerHTML =  'type de prenom : ' + typeof prenom;
        document.getElementById('p2').innerHTML = 'type d\'age : ' + typeof  age;
        document.getElementById('p3').innerHTML = 'type de reponse : ' + typeof reponse;
        document.getElementById('p4').innerHTML = 'type de resultat : '+ typeof resultat;
        document.getElementById('p5').innerHTML = 'type de type : ' + typeof type;
		
		alert( 'result contient : ' + result);

		alert( 'x contien la valeur : ' + x +
			'\ny conient la valeur : ' + y +
			'\nc contient la valeur : ' + c );

		alert(`x contien la valeur : ${prenom}
			   y contient la valeur : ${age}` );
         
       /*ceci est un commentaire multiligne
       *pour finir par */

		if (x>y) { alert('x contient une valeur superieur a 9');} 
		else {alert('x contient une valeur inferieur a 9');}

	        
        if (a!==b) {alert(a);} 
        	else {alert(b);}

        if (c<0) {alert("la valeur est :" + c);} 
        	else {alert("la veur est :" + d);} 

        if ((x<y) && c<d ) 
        	     {document.getElementById('p6').innerHTML = prenom + b ; } 
        	else { document.getElementById ('p6').innerHTML = "erreur synthaxe";}

        if (x<y || c>d){ alert("test reussi");}

        if (!(x<y)) {alert("mauvais choix");} 
        	else { alert("bon choix");}

        document.getElementById('p7').innerHTML = 
         x>=2 ?"x superieur à 2":"x inferieur à 2";
        
        document.getElementById('p8').innerHTML = 
         y<=2 ?"y inferieur à 2":"y superieur à 2";

        switch(x){
         	case 2:
         	document.getElementById('p9').innerHTML = 
         	"x stock la valeur 2";
         	break;

         	case 4:
         	document.getElementById('p9').innerHTML = 
         	"x stock la valeur 4";
         	break;

         	case 6:
         	document.getElementById('p9').innerHTML =
         	 "x stock la valeur 6";
         	break;

         	default:
         	document.getElementById('p9').innerHTML = 
         	"x ne contient aucune de ces valeur";
         };

         while(h < 10){
         	document.getElementById('p10').innerHTML += 
         	"h stock la valeur "+h+" lors du pasage "+(h+1)+" dans la boucle <br>"; 
         	h++;
         };

         while(x>0){
         	document.getElementById('p11').innerHTML +=
            "x stock la valeur "+x+" lors du passage "+(x-1)+" dans la boucle <br>";
            --x;
         };

        do{
           document.getElementById('p12').innerHTML +=
           "w stock la valeur "+w+" lors du passage " +(w+1)+" dans la boucle <br>";
           w++;
        }
        while(w<16);
        
        for(let i = 0; i < 6; i++){
        	document.getElementById('p13').innerHTML +=
        	"i stock la valeur "+i+" lors du passage "+(i+1)+" dans la boucle <br>";
        }
        for(let j = 0; j < 1000; j++){
        	if(j==8){
        		break;
        	}
        	document.getElementById('p14').innerHTML +=
        	"j stock la valeur "+j+" lors du passage "+(j+1)+" dans la boucle <br>";
        	++j;
        }

        document.getElementById("p15").innerHTML = Math.random();
        let prez2 = prez.replace("Hacene","chawky");
        document.getElementById("p16").innerHTML = prez2;

        function aleatoire() {
        	return Math.random() * 100;
        }

        document.getElementById("p17").innerHTML = aleatoire() ;

        function multiplication(nombre1, nombre2){
        	return nombre1 +"*"+ nombre2 + "=" + (nombre1 * nombre2) ;
        }

        document.getElementById("p18").innerHTML = multiplication(y,h);
       
       
       for (let v = 0; v < 10; v++) {
       	document.getElementById("p19").innerHTML += "hey you <br>";
       	;
       }
       
       document.getElementById("p20").innerHTML =
       y<=15 ? "Jouneid": "khouneid";
      
       
       let g =2;
       while(g<12){
       	document.getElementById("p21").innerHTML += "wesh le sang <br>";
       	++g;
       }

       let n = 3;
       do{
    
       	document.getElementById("p22").innerHTML += "wesh la zone <br>";
       	++n;
       }
       while(n <13);

       let l = 100;
       do{
       	document.getElementById("p23").innerHTML += "wesh le f";
       	++l;
       }
       while(l=0);

       for (let i = 0; i < 22; i++) {
       	if(i%2 !=0){
       		continue;
       	}
       	document.getElementById("p24").innerHTML +="khouneid DaDAaa <br>";
       }

       function soustraction(nombre1,nombre2){
       	return nombre1 + "-" + nombre2 + "=" + (nombre1-nombre2);
       }

       document.getElementById("p25").innerHTML = soustraction(d,y);

       let name = "je suis Jouneid";

       let name2 = name.replace( "Jouneid","khouneid");

       document.getElementById("p26").innerHTML = name2;

       function expodentielle(nombre1,nombre2,nombre3){
       	return nombre1 +"**"+nombre2 +"**" +nombre3 + "=" +(nombre1**nombre2**nombre3);
       }
       document.getElementById("p27").innerHTML = expodentielle(2,3,2);

       function div(a,b){
       	if(b==0){
       		return "divison impossible avec 0";
       	}
        else{
        	return  a/b
        	alert(" ce msg ne s'affichera pas");
        }
       }

       let chiffre1 = prompt("inserez un chiffre ");
       let chiffre2 = prompt("inserez un chiffre ");

       let resultatDiv = div(chiffre1,chiffre2);

       document.getElementById("p28").innerHTML = resultatDiv;

       let uneAlerte = function(){
       	return alert("ceci est une fonction anonyme");
       }

       uneAlerte ();

       (function(){alert("fonction auto-invoquée")})();

       let para29 = document.getElementById("p29");
       let para30 = document.getElementById("p30");

       para29.addEventListener('click', function(){alert("clique sur paragraphe29")});
       para30.addEventListener('click',function(){alert("clique sur paragraphe30")});
   
    function decompte (t){
    	if (t>0) { 
    	document.getElementById("p31").innerHTML += t + "<br>";
    	return decompte(t - 1);}
    	else {
    		return t;
    	}
    	
    };
    
    decompte(7);


   let utilisateur = {
      name:["khouned","Jouneid"],
      surname:["jean","gille"],
      age:[5,6,7,8],

      uti: function() {
      	document.getElementById("p32").innerHTML="Je m'appel " + this.name[0] +" "+ this.surname[1] + " et j'ai " + this.age[3] + " ans";
      }
   };
  utilisateur.uti();

 let utilisateur1={

 	name:"jean",
 	surname:"tulise",
 	address:"hv23@live.fr",


 };

 utilisateur1.name="Ulise",

 alert(utilisateur1.name);
 utilisateur1.taille="1 merte 70";
 utilisateur1.uzi= function(){alert("Je suis " + this.name +" " + this.surname + " mon adresse mail est " + this.address);}
   
 utilisateur1.uzi() ;

let jouneid ={
	prenom:"jouneid",
	nom:"Baadji",
	age:10,
	mail:"khouneid@live.fr",

	gut:function decompte(t){
		if (t>0) {
			document.getElementById('p33').innerHTML +="nike <br>";
			return decompte (t-1)
		} else {
			return t
		}
	}

}
jouneid.gut(7);


function Ligne(longueur){
	this.longueur = longueur;
}

Ligne.prototype.taille = function(){
	document.getElementById("p34").innerHTML= "longueur : " + this.longueur;
}

function Rectangle(longueur,largeur){
	Ligne.call(this,longueur);
	this.largeur = largeur;
}

Rectangle.prototype = Object.create(Ligne.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.air = function(){
	document.getElementById("p35").innerHTML="Air : " + this.longueur * this.largeur;
}


function Parallelepipede(longueur,largeur,hauteur){
	Rectangle.call(this,longueur,largeur);
	this.hauteur = hauteur;
}

Parallelepipede.prototype = Object.create(Rectangle.prototype);
Parallelepipede.prototype.constructor = Parallelepipede;
Parallelepipede.prototype.surface = function(){
	document.getElementById("p36").innerHTML="Surface : "+ this.longueur * this.largeur * this.hauteur;
}

let geo = new Parallelepipede(4,7,8);

geo.taille();
geo.air();
geo.surface();



class Alex{
	constructor(nom,prenom){
		this.nom = nom;
		this.prenom = prenom;
}
		guze(){
			document.getElementById("p37").innerHTML = "Je m'appel " +this.nom +" " + this.prenom;
	}
}

let ruze = new Alex("Alexandre","Ruze");

ruze.guze();

class Joe extends Alex{
	constructor(nom,prenom,mail){
		super(nom,prenom);
		this.mail = mail;

	}
	glu(){
		document.getElementById("p38").innerHTML += "Je m'appel " + this.nom + " " +this.prenom + ", vous pouvez me contactez sur " +" " +this.mail +"<br>";
	}
}

let luze = new Joe("Joe","Luze","Amelglue");
let luze2= new Joe("Joe","Luze","Jaiungroscul");
luze.guze();
luze2.glu();


let bron = 4;
let lyon3 = 8;

if (lyon3>=12) {
	alert("Julio")
} 
else if (lyon3>bron){
    
    while(bron<10){
    	document.getElementById("p39").innerHTML += "bron :" +(bron+1) + "<br>";
    	bron++;
    }
}

else{
	alert('no')
}

function moins(nombre1,nombre2,nombre3){
	return document.getElementById('p40').innerHTML=
	nombre1 + "-" + nombre2 + "-" + nombre3 + "=" + (nombre1 - nombre2 - nombre3);
}

moins(35,6,5);

let george = function(){
	alert(bron);
}

george();

let par1 = document.getElementById("p41");
let par2 = document.getElementById("p42");

par1.addEventListener('click',function(){alert("yo")});
par2.addEventListener('click',function(){alert("yuu")});

let dragonBallZ = {

     nom : ["San","Satan","Ten"],
     prenom : ["Goku","Peticoeur","Shinane"],
     age : [43,34,67],

     ball : function(){alert("Kame aaaa mea")},
     picolo : function(){alert("Naaaaamek")},
}

dragonBallZ.picolo();

dragonBallZ.soleil= function(){alert("Chaozzuuuuuuuuu")};

dragonBallZ.soleil();

dragonBallZ.enfant= ["gohan","aucun","chaosu"];


alert(dragonBallZ.nom[0]);

dragonBallZ.enfant[1] = "pico";

alert(dragonBallZ.enfant[1]);


function Hunter(a,b,c){
	this.nom=a;
	this.prenom=b;
	this.age=c;

	this.hunterXHunter=function(){
		alert("gon")
	};
}

let kirua = new Hunter("kirua","Zoldick",15);

kirua.hunterXHunter();

document.getElementById("p43").innerHTML = kirua.prenom;

function Manga(a,b,c,d,e){
	Hunter.call(this,a,b,c);
	this.email=d;
	this.status=e;

}

Manga.prototype= Object.create(Hunter.prototype);
Manga.prototype.constructor= Manga;
Manga.prototype.jump= function(){document.getElementById("p44").innerHTML="Vous voulez manger des choux"};


let noritaka = new Manga("Nori","Yakama",16,"nori@live","combatant");

alert(noritaka.age);

noritaka.jump();
noritaka.hunterXHunter();


function Kawai(a,b,c,d,e,g){
	Manga.call(this,a,b,c,d,e);
	this.origine= g;

}
Kawai.prototype = Object.create(Manga.prototype);
Kawai.prototype.constructor = Kawai;

let orochimaru = new Kawai("jiraya","Ichi",56,"jiri@mail.com","ninja","japonais");

alert(orochimaru.nom);

Kawai.prototype.iro = function(){
	document.getElementById("p45").innerHTML=
	"Je m'appel " +this.nom + "<br>" + "Je suis d'origine: " +this.origine;
}

orochimaru.iro();

class Tsunade {
	constructor(nom,prenom,age){
	this.nom=nom;
	this.prenom=prenom;
	this.age=age;

}
sakura(){alert(this.nom + " "+ this.prenom + " grosse pute")};
}

let kakashi = new Tsunade("Obito","Uchiwa",24);

kakashi.sakura();
let sasuke = new Tsunade("Itachi","Uchiwa",21);
sasuke.sakura();

class Inata extends Tsunade{
	constructor(nom,prenom,age,status){
		super(nom,prenom,age);
		this.status= status;
	}

	gamabunta(){
		document.getElementById("p46").innerHTML=
		"Je m'appel " + this.prenom + " " + this.nom + "je suis un " + this.status;
	}
	
}

let gaara = new Inata("Naruto","Uzumaki",24,"Hataye");

gaara.gamabunta();

class Pain extends Inata {
	constructor(nom,prenom,age,status,mail){
        super(nom,prenom,age,status,mail);
        this.mail = mail;
	}
	clone(){
		alert("je ne suis pas le clone")
	}
}

let kohonamaru = new Pain("Buruto","Uzumaki",12,"fils de heros","uzumaki@live.fr");

alert(kohonamaru.mail)


let oukhi = "Je suis dans le stress ultime";

if (oukhi.includes("stress")) {
	document.getElementById("p47").textContent = "Je suis ";
}
if (oukhi.includes("Stress")) {
	document.getElementById("p47").textContent = "Il est";
}

if (oukhi.startsWith("Je")) {
	document.getElementById("p48").textContent = "La phrase commence bien par Je";
}

if (oukhi.endsWith("ultime")){
	document.getElementById("p49").textContent = "La phrase fini par ultime";
}


document.getElementById("p50").textContent = oukhi.substring(8,23);
document.getElementById("p51").textContent = oukhi.lastIndexOf("e");
document.getElementById("p52").textContent = oukhi.slice("-13","-3");

let jojo = "     Youtube      ";

/** jojo.trim() supprime les espaces de debut et de fin de let jojo**/
document.getElementById("p53").textContent = jojo.toLowerCase();
alert(
	"MIN_VALUE :" + Number.MIN_VALUE +
	"\n"+ "MAX_VALUE :" +Number.MAX_VALUE +
	"\n" + "MIN_SAFE_INTEGER :" + Number.MIN_SAFE_INTEGER +
	"\n" + "MAX_SAFE_INTEGER :" + Number.MAX_SAFE_INTEGER +
	"\n" + "NEGATIVE_INFINITY :" + Number.NEGATIVE_INFINITY +
	"\n"+"POSITIVE_INFINITY :" + Number.POSITIVE_INFINITY +
	"\n" + "Not a number :" + Number.NaN);

let nb1 = 10;
let nb2 = Number.POSITIVE_INFINITY;

if (Number.isFinite(nb1)) {
	alert("Nombre fini ")
}
if (Number.isFinite(nb2)){
	alert("Nombre fini")
}

let nb3 = 12;
let nb4 = 12.5;

if(Number.isInteger(nb3)){
	alert("Nombre entier")
}

if (Number.isInteger(nb4)) {
	alert("Nombre entier")
}
/**Notez que si la valeur testée est NaN ou l’infini, la méthode renverra également false**/

let nb5 = 34;
let nb6 = NaN;

if (Number.isNaN(nb5)){
	alert("Not a Number")
}
if(Number.isNaN(nb6)){
	alert("Not a Number")
}

let nb7 = 6;
let nb8 = 4.345;

if (Number.isSafeInteger(nb7)){
	alert("nombre entier sur")
}

if (Number.isSafeInteger(nb8)) {
	alert("Nombre entier sur ")
}

let mot = "29 Pierro";
let mots = "Pierro 29";
let mos = "45.5 Junewike 55";

document.getElementById("p54").textContent = Number.parseFloat(mot);
document.getElementById('p55').textContent = Number.parseFloat(mots);
document.getElementById("p56").textContent = Number.parseFloat(mos);

document.getElementById('p57').textContent = Number.parseInt("0A",16);
document.getElementById("p58").textContent = Number.parseInt("AAA",16);
document.getElementById("p59").textContent = Number.parseInt(1010,2);

document.getElementById("p60").innerHTML = 'Math.E' + Math.E +
"<br>" + "Math.LN2 :" + Math.LN2 +
"<br>" + "Math.LN10" + Math.LN10 +
"<br>" + "Math.LOG2E :" + Math.LOG2E +
"<br>" + "MAth.LOG10E :" + Math.LOG10E +
"<br>" + "Math.PI :" + Math.PI +
"<br>" + "Math.SQRT1_2 :" +Math.SQRT1_2+
"<br>" + "Math.SQRT2 :" + Math.SQRT2 ;

let nb9 = 24.56;

document.getElementById("p61").innerHTML = 
"Nombre (floor) : " + Math.floor(nb9) + "<br>" +
"Nombre (ceil) : " + Math.ceil(nb9) + "<br>" +
"Nombre (round) :" + Math.round(nb9) + "<br>" +
"Nombre (trunc) " +Math.trunc(nb9) ;

