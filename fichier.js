
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
		
		alert( 'result contient ' + result);

		alert( 'x contien la valeur : ' + x +
			'\ny conient la valeur : ' + y +
			'\nc contient la valeur : ' + c );

		alert(`x contien la valeur : ${prenom}
			   y contient la valeur : ${age}` );
         


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
           ++w;
        }
        while(w<16);
        
        for(let i = 0; i < 6; i++){
        	if (i%2!=0) {
        		continue;
        	}
        	document.getElementById('p13').innerHTML +=
        	"i stock la valeur "+i+" lors du passage "+(i+1)+" dans la boucle <br>";
        };
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
       
       let nombre1 = prompt("Entrez premier nombre");
       let nombre2 = prompt("Entrez deuxieme nombre");

       let resultatDiv = div(nombre1,nombre2);
       document.getElementById("p19").innerHTML = resultatDiv;
       