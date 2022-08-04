 function calcular() {
    document.getElementById("re").innerHTML='';
    var mes= document.getElementById("mm").value;
    var dinero= document.getElementById("money").value;    

    for (let i = 1; i <= mes; i++) {
        let r1= dinero*i;
        document.getElementById("re").innerHTML+="Tu ahorro para el mes "+i+" es de:  "+"$"+r1+"<br>";
    }
 }
   
    
    
  
    