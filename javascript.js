let user;
let user_repetido;
let pass;
let pass_repetido;

function comparador_strings($string, $string_repetido){
    
for(i = 1; i <= $string.length; i++){
    /*
    let user_c = user[i];
    let user_r_c = user_repetido[i];
    console.log(`ciclo nro ${i}: conparacion ${user_c} y ${user_r_c}`);
   */
   if($string[i] === $string_repetido[i]){
    continue;
   }else{
    alert(`Tu Usuario o Contrasenia no coinciden`);
    break;
   }
    }
 }

alert(user = prompt("Ingrese su usuario: "));
alert(user_repetido = prompt("Ingrese de nuevo su usuario: "));
comparador_strings(user, user_repetido);


alert(pass = prompt("Ingrese su contrasenia: "));
alert(pass_repetido = prompt("Ingrese su contrasenia: "));
comparador_strings(pass, pass_repetido);

document.write("joya padre");

