var i = 0;
var svar = setInterval(Svar, 625);
function Svar(){
    console.log("svaret er: " + HuskFacitO9)
    document.getElementById("Textbox_Svar").value = HuskFacitO9;
    NytSpg();
    i = i + 1;
    if( i == 100){
        clearInterval(svar);
    }
}

