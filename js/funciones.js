function agregaGastos() {
    console.log("funciona");
    var adTd=document.getElementById("miTabla");
    adTd.insertRow(-1).innerHTML="<tr><td><input type='text' placeholder='Nombre del gasto'></td><td><input class='costoG' type='text' placeholder='Costo'></td><td><button type='button' class='btn btn-danger'>D</button></tr></tr>";
    // document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td></td><td></td><td></td><td></td>';

}




function calcularGastos() {      
    document.getElementsByClassName("totalmes").innerHTML="";  
    
    // var g2=parseFloat(document.getElementById("gasto2").innerHTML);
    // var g3=parseFloat(document.getElementById("gasto3").innerHTML);
    // var g4=parseFloat(document.getElementById("gasto4").innerHTML);
    // var g5=parseFloat(document.getElementById("gasto5").innerHTML);
    var mes=document.getElementById("meses").value;    
    
    if (mes.length==0) {
        alert("Debes ingresar los meses a calcular");
        console.log(mes);
    }else{
        // for (let i = 1; i <=mes; i++) {
        //     result+=g1+g2+g3+g4+g5;
        //     document.getElementById("totalmes").innerHTML+="Para el mes "+i+" ahorras $"+result+"<br>";
            
        // }        
    }
     
     
    //let mes=parseFloat(document.getElementById("meses").value);    
    

   
    console.log(result);
}



