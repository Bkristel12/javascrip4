//const Leer = require('prompt-sync')()
class Ejercicio1{


    divisores(num) {
        let x = 1,a=0;
    
        while (x < num) {
            if (num % x == 0) {
              
                document.getElementById("resp").innerHTML += `<br>El número ${num} es divisible entre ${x}`;
           
            }
            x = x + 1;
            
        }
    
        return x;
    }
    Divisores(n){
        let cont = 1, r = 0, acu = 0
        while (cont < n) {
            r = n % cont
            if (r == 0) {
                acu = acu + cont
                //resp.innerHTML+=cont+","
                console.log(cont)
            }
            cont = cont + 1
        }
        return acu
    }
    // 1
       divisor(){
        let acud=0
        let num=document.getElementById("num").value
        let resp = document.getElementById("resp")
        num = parseInt(num)
        acud = this.Divisores(num)
        resp.innerHTML = acud
    }
    // 2
       perfecto(){
        let acud=0
        let num=document.getElementById("num").value
        let resp = document.getElementById("resp")
        num = parseInt(num)
        acud = this.Divisores(num)
        if (acud==num){
            resp.innerHTML = `${num} es perfecto`
        }else{
            resp.innerHTML = `${num} no es perfecto`
        }
     }
    
     Primonu(num) {
        let cont = 0;
    
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                cont = cont + 1;
            }
        }
    
        return cont; 
    }
    // 3

        primo() {
        let num = parseInt(document.getElementById("num").value);
        let cont1 = this.Primonu(num);
    
        if (cont1 == 2) {
            document.getElementById("resp").innerHTML = `El número ${num} es primo`;
        } else {
            document.getElementById("resp").innerHTML = `El número ${num} no es primo`;
        }
    }


    primogemelo(a, b) {
        let contA = 0;
        for (let i = 1; i <= a; i++) {
            if (a % i === 0) {
                contA++;
            }
        }
    
        let contB = 0;
        for (let u = 1; u <= b; u++) {
            if (b % u === 0) {
                contB++;
            }
        }
    
        return [contA, contB];
    }
    // 4
         gemelo() {
        let a = parseInt(document.getElementById("a").value);
        let b = parseInt(document.getElementById("b").value);
        let resp = document.getElementById("resp");
    
        let [c, d] = this.primogemelo(a, b);
    
        if (c == 2 && d == 2) {
            if (b === a + 2 || a === b + 2) {
                resp.innerHTML = `${a} y ${b} son números primos gemelos`;
            } else {
                resp.innerHTML = `${a} y ${b} no son números primos gemelos`;
            }
        } else {
            resp.innerHTML = `No son primos`;
        }
    }
    

    cadena(f1, f2) {
        let concatenacion = f1 + " " + f2;
        return concatenacion;
    }
    // 5
        concatenarCadenas() {
        let f1 = document.getElementById("f1").value;
        let f2 = document.getElementById("f2").value;
        let resp = document.getElementById("resp");
        
        let resultado = this.cadena(f1, f2);
        resp.innerHTML = `Palabra nueva: ${resultado}`;
    }
    

    isCadena(cadena, buscado) {
        let posAux = 0, posC = 0, posB = 0, lonC = 0, lonB = 0, enc = false;
        lonC = cadena.length;
        lonB = buscado.length;
    
        while (posC < lonC && !enc) {
            if (cadena[posC] == buscado[0]) {
                posAux = posC;
                posB = 0;
                while (posAux < lonC && posB < lonB && cadena[posAux] == buscado[posB]) {
                    posAux++;
                    posB++;
                }
                if (posB == lonB) {
                    enc = true;
                } else {
                    posC = posC + 1;
                }
            } else {
                posC = posC + 1;
            }
        }
    
        return enc ? posC : -1;
    }
    // 6
       agregarCad() {
        let cadena = document.getElementById("cadena").value;
        let buscado = document.getElementById("buscado").value;
        let subcadena = document.getElementById("subcadena").value;
        let resp = document.getElementById("resp");
    
        
        let posC = this.isCadena(cadena, buscado, subcadena);

        if (posC !== -1) {
            // Insertar la subcadena en la posición encontrada
            cadena = cadena.slice(0, posC) + subcadena +" "+ cadena.slice(posC);
        }
        resp.innerHTML = `Cadena resultante: ${cadena}`;
    }
    // 7
       eliminarCadena() {
        let cadena = document.getElementById("cadena").value;
        let buscado = document.getElementById("buscado").value;
        let resp = document.getElementById("resp");
    
        let posC = this.isCadena(cadena, buscado);
    
        if (posC !== -1) {
            // Eliminar la cadena encontrada
            cadena = cadena.slice(0, posC) + cadena.slice(posC + buscado.length);
        }
    
        resp.innerHTML = `Cadena resultante: ${cadena}`;
    }
    // 8
        buscarCadena() {
        let pos;
        let cadena = document.getElementById("cadena").value;
        let buscado = document.getElementById("buscado").value;
        let resp = document.getElementById("resp");

        pos = this.isCadena(cadena, buscado);

        if (pos >= 0) {
            resp.innerHTML = `"${buscado}" se encontró en la posición: ${pos} de la cadena`;
        } else {
            resp.innerHTML = `"${buscado}" no se encontró en la cadena`;
        }
    }
    
  
            
    
    isarreglo(arreglo, buscado) {
            let pos = 0,
                enc = false;
    
            while (pos < arreglo.length && enc === false) {
                if (arreglo[pos] == buscado) {
                    enc = true;
                } else {
                    pos++;
                }
            }
    
            if (enc === true) {
                arreglo.splice(pos, 1);
                return pos; // Devuelve la posición donde se encontró el número
            } else {
                return -1; // Indica que el número no se encontró en el arreglo
            }
        }
            // 9
            eliminar_arreglo() {
            let arregloInput = document.getElementById("numeros").value;
            let buscado = document.getElementById("buscado").value;
            let resp = document.getElementById("resp");
    
            let arreglo = arregloInput.split(";");
    
            // Verificar si el número está en el arreglo y eliminarlo
            let posicion = this.isarreglo(arreglo, buscado);
            if (posicion >= 0) {
                resp.innerHTML = `Número ${buscado} eliminado.<br> Nuevo arreglo: ${arreglo.join(";")}`;
            } else {
                resp.innerHTML = `El número ${buscado} no está en el arreglo.`;
            }
        }
        // 10
            agregar_arreglo() {
            let arregloInput = document.getElementById("numeros").value;
            let nuevoNumero = document.getElementById("nuevoNumero").value
            let posicion = parseInt(document.getElementById("pos").value);
            let resp = document.getElementById("resp");
    
            
    
            let arreglo = arregloInput.split(";");
    
            
            arreglo.splice(posicion, 0, nuevoNumero);
          
            resp.innerHTML = `Número ${nuevoNumero} agregado en la posición ${posicion}.<br> Nuevo arreglo: ${arreglo.join(";")}`;
        }
    
        // agregar_arreglo() {
        //     let arregloInput = document.getElementById("numeros").value;
        //     let nuevoNumero = document.getElementById("nuevoNumero").value;
        //     let resp = document.getElementById("resp");
    
        //     let arreglo = arregloInput.split(";");
    
        //     // Verificar si el número ya está en el arreglo
        //     if (this.isarreglo(arreglo, nuevoNumero) >= 0) {
        //         resp.innerHTML = `Número ${nuevoNumero} ya está en el arreglo. Arreglo actual: ${arreglo.join(";")}`;
        //     } else {
        //         // Agregar el nuevo número al arreglo
        //         arreglo.push(nuevoNumero);
        //         resp.innerHTML = `Número ${nuevoNumero} agregado.<br> Nuevo arreglo: ${arreglo.join(";")}`;
        //     }
        // }
    // 11
            buscarArreglo() {
            let arreglo = document.getElementById("numeros").value;
            arreglo = arreglo.split(";");
            let buscado = document.getElementById("buscado").value;
            let resp = document.getElementById("resp");
    
            let posicion = this.isarreglo(arreglo, buscado);
    
            if (posicion >= 0) {
                resp.innerHTML = `"${buscado}" se encontró en la posición: ${posicion} del arreglo`;
            } else {
                resp.innerHTML = `"${buscado}" no se encontró en el arreglo`;
            }
        }
    

       
   num_mayor(numeros) {
                let longitud = numeros.length;
                let max = numeros[0];
        
                for (let pos = 1; pos < longitud; pos++) {
                    let num = parseFloat(numeros[pos]); // Convertir cada número a un valor numérico
        
                    if (!isNaN(num) && num > max) {
                        max = num;
                    }
                }
        
                return max; // Devolver el número mayor
            }
        // 12
       mayor_Arreglo() {
                let n1 = document.getElementById("n1").value;
                let numeros = n1.split(";").map(Number); // Convertir los números a un array de enteros
        
                let max = this.num_mayor(numeros);
        
                if (!isNaN(max)) {
                    document.getElementById("resp").innerHTML = `El mayor es: ${max}`;
                } else {
                    document.getElementById("resp").innerHTML = "Ingrese números válidos.";
                }
            }
        


            cadenaAArreglo(cadena, separador) {
                if (typeof cadena !== 'string') {
                    document.getElementById("resp").innerHTML = 'El primer parámetro debe ser una cadena.';
                    return null;
                }
        
                if (typeof separador !== 'string') {
                    document.getElementById("resp").innerHTML = 'El segundo parámetro debe ser un separador válido.';
                    return null;
                }
        
                const arreglo = cadena.split(separador);
                return arreglo;
            }
        
            // De cadena a arreglo
            convertirYMostrarResultadoCadena() {
                const miCadena = document.getElementById("inputCadena").value;
                const miArreglo = this.cadenaAArreglo(miCadena, ',');
        
                if (miArreglo !== null) {
                    document.getElementById("resp").innerHTML = `Cadena original: ${miCadena} <br >Arreglo resultante:  [${miArreglo.join('; ')}]`;
                }
            }
        
            // De arreglo a cadena
            // convertirYMostrarResultadoArreglo() {
            //     const miArreglo = document.getElementById("inputArreglo").value.split(',').map(item => item.trim());
        
            //     if (miArreglo.length > 0) {
            //         document.getElementById("resp").innerHTML = `Arreglo original: [${miArreglo.join(', ')}] Cadena resultante: ${miArreglo.join(', ')}`;
            //     }
            // }

            convertirYMostrarResultadoArreglo(inputArreglo) {
                const miArreglo = [];
        
               
                let elemento = "";
                for (let i = 0; i < inputArreglo.length; i++) {
                    const char = inputArreglo[i];
        
                    if (char === ';' || char === ' ') {
                       
                        miArreglo.push(elemento);
                        elemento = "";
                    } else {
                        
                        elemento += char;
                    }
                }
        

                if (elemento !== "") {
                    miArreglo.push(elemento);
                }
        
                if (miArreglo.length > 0) {
                    
                    
                    const cadenaResultante = `<br>Cadena resultante: ${miArreglo.join(', ')}`;
        
                   
                    return cadenaResultante;
                }
        
                
                return "El arreglo está vacío.";
            }
        // de arreglo a cadena
                mostrarResultadoArreglo() {
                // Ejemplo de uso
                const inputArreglo = document.getElementById("inputArreglo").value;
                const resultado = this.convertirYMostrarResultadoArreglo(inputArreglo);
                document.getElementById("resp").innerHTML = `Arreglo original: [${inputArreglo}] ${resultado}`;
            }
            
            convertirBase(numeroBase10, cbase) {
                var esNegativo = false;
            
                if (numeroBase10 < 0) {
                    esNegativo = true;
                    numeroBase10 = Math.abs(numeroBase10);
                }
            
                if (numeroBase10 === 0) {
                    // Devolver el resultado directamente
                    return `En base ${cbase}: 0`;
                }
            
                var bits = [];
                while (numeroBase10 > 0) {
                    var residuo = numeroBase10 % cbase;
                    bits.unshift(residuo);  // Agregar el residuo al principio del array
                    numeroBase10 = Math.floor(numeroBase10 / cbase);
                }
            
                var resultadoBase2 = bits.join('');
            
                if (esNegativo) {
                    resultadoBase2 = '-' + resultadoBase2;
                }
            
                // Devolver el resultado
                return `En base ${cbase}: ` + resultadoBase2;
            }
            
            // base dos
            convertidor() {
                var numeroBase10 = document.getElementById("numeroBase10").value;
                var cbase = document.getElementById("cbase").value;
                
                // Obtener el resultado llamando a convertirBase con ambos argumentos
                var resultado = this.convertirBase(parseInt(numeroBase10, 10), parseInt(cbase, 10));
            
                // Mostrar el resultado en el elemento con id "resp"
                document.getElementById("resp").innerText = resultado;
            }
            

            binario(inputBinario, inputBase) {
                var longitud = inputBinario.length;
                var resultado = 0;
            
                for (var i = 0; i < longitud; i++) {
                    var bit = parseInt(inputBinario.charAt(i));
            
                    if (bit === 1) {
                        resultado += Math.pow(2, longitud - 1 - i);
                    }
                }
            
                var resultadoEnBaseDestino = resultado.toString(inputBase);
                return resultadoEnBaseDestino;
            }
            
            convertirBasebi() {
                var numeroBinario = document.getElementById("inputBinario").value;
                var baseDestino = parseInt(document.getElementById("inputBase").value);
                var res = this.binario(numeroBinario, baseDestino);
                document.getElementById("resp").innerHTML = "El resultado en base " + baseDestino + " es: " + res;
            }
            


           
        







































}





let ope = new Ejercicio1() //crea una variable igual que la clase


