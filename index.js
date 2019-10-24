var countDownDate = new Date("October 31, 2019 00:00:00").getTime();
var tiempo = setInterval(function(){
    var now= new Date().getTime();
    var diferencia = countDownDate - now;
    var dias= Math.floor(diferencia /(1000*60*60*24));
    var horas= Math.floor((diferencia %(1000*60*60*24))/(1000*60*60));
    var minutos= Math.floor((diferencia %(1000*60*60))/(1000*60));
    var segundos= Math.floor((diferencia %(1000*60))/1000);
    document.getElementById("CuentaRegresiva").innerHTML = "<h3>"+ dias + " D " + horas + " H " + minutos + " M " + segundos + " S " + "</h3>";
    if(diferencia<0){
        clearInterval(tiempo);
        document.getElementById("CuentaRegresiva").innerHTML = "sin stock";
    } 
},0000);
var countDownDate1 = new Date("November 31, 2019 00:00:00").getTime();
var tiempo1 = setInterval(function(){
    var now1= new Date().getTime();
    var diferencia1 = countDownDate1 - now1;
    var dias1= Math.floor(diferencia1 /(1000*60*60*24));
    var horas1= Math.floor((diferencia1 %(1000*60*60*24))/(1000*60*60));
    var minutos1= Math.floor((diferencia1 %(1000*60*60))/(1000*60));
    var segundos1= Math.floor((diferencia1 %(1000*60))/1000);
    document.getElementById("CuentaRegresiva1").innerHTML = "<h3>"+ dias1 + " D " + horas1 + " H " + minutos1 + " M " + segundos1 + " S " + "</h3>";
    if(diferencia1<0){
        clearInterval(tiempo1);
        document.getElementById("CuentaRegresiva1").innerHTML = "sin stock";
    } 
},0000);
var countDownDate3 = new Date("April 31, 2020 00:00:00").getTime();
var tiempo3 = setInterval(function(){
    var now3= new Date().getTime();
    var diferencia3 = countDownDate3 - now3;
    var dias3= Math.floor(diferencia3 /(1000*60*60*24));
    var horas3= Math.floor((diferencia3 %(1000*60*60*24))/(1000*60*60));
    var minutos3= Math.floor((diferencia3 %(1000*60*60))/(1000*60));
    var segundos3= Math.floor((diferencia3 %(1000*60))/1000);
    document.getElementById("CuentaRegresiva3").innerHTML = "<h3>"+ dias3 + " D " + horas3 + " H " + minutos3 + " M " + segundos3 + " S " + "</h3>";
    if(diferencia3<0){
        clearInterval(tiempo3);
        document.getElementById("CuentaRegresiva3").innerHTML = "sin stock";
    } 
},0000);

var countDownDate5 = new Date("January 31, 2020 00:00:00").getTime();
var tiempo5 = setInterval(function(){
    var now5= new Date().getTime();
    var diferencia5 = countDownDate5 - now5;
    var dias5= Math.floor(diferencia5 /(1000*60*60*24));
    var horas5= Math.floor((diferencia5 %(1000*60*60*24))/(1000*60*60));
    var minutos5= Math.floor((diferencia5 %(1000*60*60))/(1000*60));
    var segundos5= Math.floor((diferencia5 %(1000*60))/1000);
    document.getElementById("CuentaRegresiva5").innerHTML = "<h3>"+ dias5 + " D " + horas5 + " H " + minutos5 + " M " + segundos5 + " S " + "</h3>";
    if(diferencia5<0){
        clearInterval(tiempo5);
        document.getElementById("CuentaRegresiva5").innerHTML = "sin stock";
    } 
},0000);
//restriccion
var clave="delcarmen";
var ingreso=prompt("Ingrese la clave para acceder a esta seccion!","password");
if(clave != ingreso){
        alert("Contraseña Incorrecta!, sera redirigido al Inicio");
        setTimeout("redireccionar()",3000);
    }
function redireccionar(){
    window.location="https://francoandes12.github.io/farmaciadelcarmen/index.html";
}
//aviso por si se esta por vencer algun medicamento
