function agregaGastos() {
    const adTd=document.getElementById("miTabla");
    adTd.insertRow(-1).innerHTML=
    "<tr><td><input type='text' placeholder='Nombre del gasto'></td><td><input class='costoG' type='text' placeholder='Costo' ></td><td><button type='button' class='btn btn-danger' onclick='deleteGasto()'>D</button></tr></tr>";
}
function calcularGastos() {   
    document.getElementById("totalmes").innerHTML="";
    document.getElementById("totalmeses").innerHTML=""; 
    const mes=document.getElementById("meses").value;  
    const gastos = document.getElementsByClassName("costoG");  
    const total=[];
    let sum = 0;
 
    if (mes.length==0) {
        alert("Debes ingresar minimo un mes para calcular");
    }else{
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
        if (mes>1) {
            let sumMes=sum*mes;
            document.getElementById("totalmeses").innerHTML+="<h5>"+"Lo que gastas en "+mes+" meses es un total de= $"+sumMes+"</h5>";
            console.log(sum)
            console.log(mes)
            
        }else{
            document.getElementById("totalmes").innerHTML+="<h5>"+"Lo que gastas en un mes es un total de: $"+sum+"</h5>"; 
        }  
    }

         
}
function deleteGasto() {
//alert("hola")      
} 

document.getElementById("limpiarGastos").addEventListener("click", function() { 
    document.getElementById("miTabla").innerHTML="";
    document.getElementById("totalmes").innerHTML="";
    document.getElementById("meses").value="";

    // alert("hola")
})
