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
        document.getElementById("CuentaRegresiva").innerHTML = "sin stock"
    }

    
},1000);