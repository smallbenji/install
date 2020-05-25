var Resultat = prompt("Resultat");
var BarBredde = 600;
var Bredde = BarBredde * Resultat / 100;
var x = 500;

setTimeout(function(){
    document.getElementById("Label_Resultat").innerHTML = Resultat + "%";
    document.getElementById("Div_Procent").style.width = Bredde + "px";
}, x);
