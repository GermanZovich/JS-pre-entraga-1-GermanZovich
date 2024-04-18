let user;
let user_repetido;
let pass;
let pass_repetido;
let resultado_comparador;

function comparador_strings($string, $string_repetido){
    
for(i = 0; i < $string.length; i++){
    
    let string_c = user[i];
    let string_r_c = user_repetido[i];
    console.log(`ciclo nro ${i}: conparacion ${string_c} y ${string_r_c}`);


   if($string.length != $string_repetido.length){
    //return false;
    resultado_comparador = false;
    break;
   }
   if($string[i] === $string_repetido[i]){
    if(i === ($string.length - 1)){
        console.log(`los strigns son iguales`);
        //return true;
        resultado_comparador = true;
        break;
       }
    continue;
   }else{
    console.log("no anda un choto");
    //return false;
    resultado_comparador = false;
    break;
   }
    }
 }




alert(user = prompt("Ingrese su usuario: "));
alert(user_repetido = prompt("Ingrese de nuevo su usuario: "));
comparador_strings(user, user_repetido);

while(resultado_comparador === false){
    alert(user = prompt("Ingrese su usuario: "));
    alert(user_repetido = prompt("Ingrese de nuevo su usuario: "));
    comparador_strings(user, user_repetido);
}

// alert(user = prompt("Ingrese su usuario: "));
// alert(user_repetido = prompt("Ingrese de nuevo su usuario: "));
// comparador_strings(user, user_repetido);


alert(pass = prompt("Ingrese su contrasenia: "));
alert(pass_repetido = prompt("Ingrese su contrasenia: "));
comparador_strings(pass, pass_repetido);

while(resultado_comparador === false){
    alert(pass = prompt("Ingrese su contrasenia: "));
    alert(pass_repetido = prompt("Ingrese su contrasenia: "));
    comparador_strings(pass, pass_repetido);
}

// alert(pass = prompt("Ingrese su contrasenia: "));
// alert(pass_repetido = prompt("Ingrese su contrasenia: "));
// comparador_strings(pass, pass_repetido);

document.write("joya padre");