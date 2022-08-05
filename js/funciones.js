function agregaGastos() {
    let adTd=document.getElementById("miTabla");
    adTd.insertRow(-1).innerHTML=
    "<tr><td><input type='text' placeholder='Nombre del gasto'></td><td><input class='costoG' type='text' placeholder='Costo' ></td><td><button type='button' class='btn btn-danger'>D</button></tr></tr>";
}



function calcularGastos() {      
    document.getElementsByClassName("totalmes").innerHTML="";
    // var mes=document.getElementById("meses").value;  
    const gastos = document.getElementsByClassName("costoG");  
    const total=[];
    let sum = 0;

    // if (mes.length==0) {
    //     alert("Debes ingresar los meses a calcular");
    // }else{

        for (let i = 0; i <gastos.length; i++) {
            let gastos =document.getElementsByClassName("costoG")[i].value;           
            total.push(gastos);
            
            // console.log(gastos);
        }
        console.log(total);
         //  toal.forEach(element => console.log(element));
        for (let i = 0; i < total.length; i++) {
            sum += parseFloat(total[i]);
        }    
        document.getElementById("totalmes").innerHTML+="<h5>"+"Lo que ahorras en el mes es un total de: $"+sum+"</h5>";

        // for (let i = 1; i <=mes; i++) {
        //     totalMes+=sum*parseFloat(mes);
        //     document.getElementById("totalmes").innerHTML+="Para el mes "+i+" ahorras $"+totalMes+"<br>";
            
        // }     
   // } 
}



