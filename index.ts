// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// RETOS DE PROGRAMACIÓN
// Reto #0: EL FAMOSO "FIZZ BUZZ

/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

const FizzBuzz = () => {
  for (let i = 0; i <= 100; i++) {
    if (i > 0 && i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i > 0 && i % 3 == 0) {
      console.log('fizz');
    } else if (i > 0 && i % 5 == 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};

// FizzBuzz();

// Reto #1: ¿ES UN ANAGRAMA?

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
