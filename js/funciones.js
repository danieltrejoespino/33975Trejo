const userValido='root'
const passValido=1234
let gastosHormiga
// sessionStorage.getItem('userLS')==null && sessionStorage.getItem('passLS')==null ? alert("Inicia sesion para continuar") : alert("Tu sesion continua iniciada")
sessionStorage.getItem('userLS')==null && sessionStorage.getItem('passLS')==null ?  
Swal.fire({
    position: 'top',
    icon: 'info',
    title: 'Inicia sesion para continuar',
    showConfirmButton: false,
    timer: 1500
  }) 
  : 

  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Tu sesion continua iniciada',
    showConfirmButton: false,
    timer: 1000
  })



//   let userLogin = document.getElementById("user").value;
//     let passLogin = document.getElementById("pass").value;  
//     sessionStorage.setItem("userLS",userLogin);
//     sessionStorage.setItem("passLS",passLogin); 

let iniciaSesion = document.getElementById("loginGo")
iniciaSesion.addEventListener("click", login)

let closeS = document.getElementById("cerrarSesion")
    closeS.addEventListener("click", closeSesion)

let addG = document.getElementById("btnAddG")
    addG.addEventListener("click", agregaGastos)
    // addG.onmousemove = () => {console.log("Move")}

 let calG = document.getElementById("btnCalG")
    calG.addEventListener("click", calcularGastos)

let cleanG = document.getElementById("btnCleanG")
    cleanG.addEventListener("click", cleanGastos)    

let calMetas = document.getElementById("btnCalMeta")
    calMetas.addEventListener("click", metas) 
    
let infoGastos = document.getElementById("btnIfoG")
    infoGastos.addEventListener("click", infoGastosH) 
 
function agregaGastos() {
    const adTd=document.getElementById("miTabla");
    adTd.insertRow(-1).innerHTML=
    "<tr><td><input type='text' placeholder='Nombre del gasto'></td><td><input class='costoG' type='text' placeholder='Costo' ></td></tr></tr>"
}

function calcularGastos() {   
    document.getElementById("totalmes").innerHTML=""
    document.getElementById("totalmeses").innerHTML=""
    const mes=document.getElementById("meses").value 
    const gastos = document.getElementsByClassName("costoG")
    const total=[]
    let sum = 0
    let tm=document.getElementById("totalmeses")
    // console.log(gastos)

    if (mes.length==0) {
        // alert("Debes ingresar minimo un mes para calcular");
        Swal.fire({
            title: 'Ingresa minimo un mes para continuar', 
            confirmButtonText: 'Continuar', 
          })
        document.getElementById("meses").style.backgroundColor = 'yellow';
  
    }else{
        for (let i = 0; i <gastos.length; i++) {
            let gastos =document.getElementsByClassName("costoG")[i].value          
            total.push(gastos)            
        }
        
        for (let i = 0; i < total.length; i++) {
            sum += parseFloat(total[i])
        }
        mes>1 ? tm.innerHTML+="<h5>"+"Lo que gastas en "+mes+" meses es un total de= $"+(sum*mes)+"</h5>" : tm.innerHTML+="<h5>"+"Lo que gastas en un mes es un total de: $"+sum+"</h5>"; 
        gastosHormiga=sum

        tm.innerHTML+='<h4>Tu gasto mas grande es de: $'+Math.max(...total)+'</h4>'
        document.getElementById("meses").style.backgroundColor = 'white';

        // if (mes>1) {
        //     let sumMes=sum*mes;
        //     document.getElementById("totalmeses").innerHTML+="<h5>"+"Lo que gastas en "+mes+" meses es un total de= $"+sumMes+"</h5>";            
        // }else{
        //     document.getElementById("totalmes").innerHTML+="<h5>"+"Lo que gastas en un mes es un total de: $"+sum+"</h5>"; 
        // }  
    }         
    


}//calcularGastos
function infoGastosH() {
    const lista = document.querySelector('#gastosEjemplo')
    lista.innerHTML=''
    fetch("./assets/data.json")
    .then(response => {
    return response.json();
    })
    .then(data => {

        data.forEach((producto) => {
            const li = document.createElement('p')
            li.innerHTML = `${producto.nombre} $ ${producto.precio}</p> `
            lista.append(li)
        })

        console.log(data)
    });
}

function metas() {  
    function metaAhorro(nombre, ahorro) {
        this.nombre = nombre
        this.ahorro = ahorro
        
    }
    let nAhorro =document.getElementById("nombreAhorro").value         
    let meahorro =document.getElementById("costoAhorro").value          
    let objetivo=0
    const metasAh = new metaAhorro(nAhorro, meahorro)  
    // console.log(metasAh) // "John Doe"
    const { ahorro } = metasAh   
    //console.log(nombre) // "John Doe"
    let finalObj=parseInt(ahorro)
    
    for (let i = 0; i < finalObj; i++) {
        objetivo += gastosHormiga;
        // console.log(objetivo)        
    }
    // console.log(finalObj)
    // console.log(parseFloat(ahorro)/sum) // 32   
    
}




function deleteGasto() {
//alert("hola")      
}  
function cleanGastos() {
    document.getElementById("miTabla").innerHTML=""
    document.getElementById("totalmes").innerHTML=""
    document.getElementById("meses").value=""
}

function login() {
    let userLogin = document.getElementById("user").value
    let passLogin = document.getElementById("pass").value
    sessionStorage.setItem("userLS",userLogin)
    sessionStorage.setItem("passLS",passLogin)
    sessionStorage.getItem('userLS')==userValido && sessionStorage.getItem('passLS')==passValido  ?  usuarioValido()  :  usuarioNoValido() 
}
function usuarioValido() {
    document.getElementById("user").value=""
        document.getElementById("pass").value=""
        // alert("USUARIO  y contraseña CORRECTO")      
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario y contraseña correcto',
            showConfirmButton: false,
            timer: 1500
          })  
}
function usuarioNoValido() {
    document.getElementById("user").value=""
        document.getElementById("pass").value=""
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Usuario y contraseña incorrecto',
            showConfirmButton: false,
            timer: 1500
          })  
        }
function closeSesion() {
    sessionStorage.clear()
    // alert ("Sesión cerrada")
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cesión cerrada con exito',
        showConfirmButton: false,
        timer: 1500
      })
}
 