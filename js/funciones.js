const userValido='root'
const passValido=1234

 if (sessionStorage.getItem('userLS')===null && sessionStorage.getItem('passLS')===null) {
    alert("Inicia sesion para continuar")


 }else{
    alert("Tu sesion continua iniciada")
    
 }
 

let iniciaSesion = document.getElementById("loginGo")
iniciaSesion.addEventListener("click", login)


let closeS = document.getElementById("cerrarSesion")
    closeS.addEventListener("click", closeSesion)

let addG = document.getElementById("btnAddG")
    addG.addEventListener("click", agregaGastos)
    addG.onmousemove = () => {console.log("Move")}

 let calG = document.getElementById("btnCalG")
    calG.addEventListener("click", calcularGastos)

let cleanG = document.getElementById("btnCleanG")
    cleanG.addEventListener("click", cleanGastos)    
 
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
function cleanGastos() {
    document.getElementById("miTabla").innerHTML="";
    document.getElementById("totalmes").innerHTML="";
    document.getElementById("meses").value="";
}

function login() {
    var userLogin = document.getElementById("user").value;
    var passLogin = document.getElementById("pass").value;  
    sessionStorage.setItem("userLS",userLogin);
    sessionStorage.setItem("passLS",passLogin);
    let validaUser =  sessionStorage.getItem('userLS');
    let validaPass =  sessionStorage.getItem('passLS');

    if (validaUser==userValido && validaPass==passValido) {
 
        document.getElementById("user").value="";
        document.getElementById("pass").value="";
        alert("USUARIO  y contraseña CORRECTO")        
    }else{
        document.getElementById("user").value="";
        document.getElementById("pass").value="";
        alert("USUARIO o contraseña INCORRECTO")
    }
}

function closeSesion() {
    sessionStorage.clear()
    alert ("Sesión cerrada")
}

