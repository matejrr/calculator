
//          ------    Old School making of a calculator 👨🏻💻   ------

const screen = document.getElementById('screen')

// Botón mágico que manejará todos los botones numéricos de la calculadora.

function handleTecla(char){
   if(screen.textContent.startsWith('0') || screen.textContent.startsWith('.')){
      screen.textContent = char
   }else{
      const accInputValue = document.getElementById('screen').textContent.concat(char)
      document.getElementById('screen').textContent = accInputValue
   }
}


 /* Para resetear el valor a '0' Creamos una función que apendice un nuevo el elemento <span> para englobar este valor
    y así Poder modificarlo más adelante.

- 'screen-limpieza' es una clase css creada para pasárla dinámicamente al <span>
   */


function handleLimpieza() {
   const spanElement = document.createElement('span')
   spanElement.textContent = '0'
   spanElement.classList.add('screen-limpieza')

   screen.innerHTML = ''
   screen.appendChild(spanElement)
}


//           ------   Es hora de Atacar las teclas Aritméticas!   ------

   /* Añadimos un espacio cada vez que las utilicemos para separarla de los números */

function handleTeclAritmetica(char){
   const accInputValue = document.getElementById('screen').textContent.concat(' ' + char + ' ')
   document.getElementById('screen').textContent = accInputValue
}


// Realizamos la función que calculará el resultado de nuestra operación

function calculation(){
   const screenValue = document.getElementById('screen').textContent
      if(screenValue.includes('x')){
         const newValue = screenValue.replace(/x/g, '*')
         const calculus = eval(newValue)
         document.getElementById('screen').textContent = calculus
      }
      const calculus = eval(screenValue)
      document.getElementById('screen').textContent = calculus
}

//---------------------------------------------------------------------------------------------------------------------

/* Realizamos lo mismo para la pantalla de la segunda calculadora. Necesitamos 'ids' nuevos :) */

const screen2 = document.getElementById('screen2')

function handleTecla2(char){
   if(screen2.textContent.startsWith('0') || screen.textContent.startsWith('.')){
      screen2.textContent = char
   }else{
      const accInputValue = document.getElementById('screen2').textContent.concat(char)
      document.getElementById('screen2').textContent = accInputValue
   }
}

function handleLimpieza2() {
   const spanElement = document.createElement('span')
   spanElement.textContent = '0'
   spanElement.classList.add('screen-limpieza')

   screen2.innerHTML = ''
   screen2.appendChild(spanElement)
}


function handleTecl2Aritmetica(char){
   const accInputValue = document.getElementById('screen2').textContent.concat(' ' + char + ' ')
   document.getElementById('screen2').textContent = accInputValue
}


function calculation2(){
   const screenValue = document.getElementById('screen2').textContent
      if(screenValue.includes('x')){
         const newValue = screenValue.replace(/x/g, '*')
         const calculus = eval(newValue)
         document.getElementById('screen2').textContent = calculus
      }
      const calculus = eval(screenValue)
      document.getElementById('screen2').textContent = calculus
}
