
let x= 6 , y=10 ;
		let a ="Hacene Bon goss";
		let b = "gratte moi le cul";
		let c = -20 , d = 40 ;
		let prenom = "Hacene Bon goss";
		let age = 33;
		let reponse= false;
		let resultat = 10 < 6;
		let type = null;
		let result = y % x ;

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

        