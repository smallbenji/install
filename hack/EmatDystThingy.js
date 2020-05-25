var i = 0;
var a = 6;
var svar = setInterval(Svar, prompt("How fast?:"));
function Svar(){
    console.log("svaret er: " + FacitA[ValgtSpg])
    document.getElementById("Textbox_BrugersvarA").value = FacitA[ValgtSpg];
    a = FacitA[ValgtSpg];
    SkiftSpg(-1)
    i++;
    if (a === FacitA[ValgtSpg]){
        clearInterval(svar);
    }
    if( i == 100){
        clearInterval(svar);
    }
}

