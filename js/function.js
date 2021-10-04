var palabra1 = document.getElementById("palabra_introducir");
var cadena_guiones = document.getElementById("guiones");
var letra = document.getElementById("letra_introducir");
var errores = document.getElementById("errores")



function introducirPalabra(){
    errores.value=0;
    var guiones="";
    var a = palabra1.value;
    for(var i=0;i<a.length;i++){
        guiones=guiones+"_";
    }
    cadena_guiones.value=guiones;
}

function introducirLetra(Event){
    var sw=false;
    var guiones=cadena_guiones.value;
    var palabra=palabra1.value;
    var cadena=guiones;
    var leter=letra.value;
    var i=0;
    if(guiones.length!=0){
        for(i=0;i<palabra.length;i++){
            if(palabra.indexOf(leter,i)!=-1){
                let pos=palabra.indexOf(leter,i);
                cadena=cadena.substring(0,pos)+leter+cadena.substring(pos+1,palabra.length);
                document.getElementById("guiones").value=cadena;

            }else{
                errores.value++;
                break;
            }
            i=palabra.indexOf(leter,i); 
            if(palabra.indexOf(leter,i+1)==-1){
                break;
            }   
            if(palabra==cadena)alert("Felicidades");     
            }
            letra.value="";
    }
    else{
        alert("Escribe una palabra primero");
        letra.value="";
    }
}       