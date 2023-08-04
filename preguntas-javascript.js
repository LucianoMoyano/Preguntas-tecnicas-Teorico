/* 
 PREGUNTAS JAVASCRIPT
-que es javascript:
lenguaje de programación, interpretado, débilmente tipado, que se define como orientado a objetos pero en realidad es multiparadigma. es interpretado porque es capaz de analizar y ejecutar otros programas. es débilmente tipado porque no es necesario especificar un tipo al dato a ingresar

It is an interpretated type of programing language commonly orientated towards object but it is actually a multiparadigm type of language . it is interpretated because it is capable of analyzing and executing several more programs.We can say it is “weakly typed” because there is no need to specify a type to the data we are submitting 


- que es un scope
El término scope hace referencia a una variable y su alcance de uso (o su disponibilidad para usarse)


- que es un closure
Una closure es una función definida dentro de otra función (llamada función padre), y tiene acceso a las variables que han sido declaradas y definidas en el scope de su función padre.

-hoisting.
Es un mecanismo de JavaScript donde las declaraciones de variables y funciones se mueven al principio de su scope o ámbito antes de ejecutar el código
It is a javascript mechanism where variables and function declarations are moved to the top of their scope before code execution. So JS assigns them a memory space first and then operates with them.

- que son las high order functions
Fx que aceptan una Fx como argumento o que retorna una Fx como resultado.
Fx that accepts a fx as an argument or that return a Fx as a result

- qué tipos de datos existen en JS
Primitivos:
Undefined, Boolean,Number,String,null ;
Complejos:
Objetos: key value pair of data (array,funciones,etc)
- var let y const:
Var: forma tradicional de declarar una variable. Permite redeclarar y actualizar una variable.El problema con Var es su scope, ya que si se declara una variable con var fuera de una función o bloque, la variable tendrá un ámbito global y podría ser utilizada o accedida desde cualquier parte del documento.
Is the traditional way of declaring a variable.It allows us to redeclare and update a variable.
The problem with Var is its scope, since if a variable is declared with VAR outside of a function or block scope, the variable will have a global scope and could be used or accessed from anywhere in the document.
Let = introduce el scope de bloque y resuelve el problema de scope de VAR ya que solo puede ser utilizada dentro del scope en el cual fue creada. permite actualizar una variable pero no redeclararla dentro de su scope.
 introduces the block scope and solves the VAR scope problem since it can only be used within the scope in which it was created. It also allows us to update a variable but not redeclare it within its scope.
Const = las variables con CONST tambien son de bloque. Solo pueden ser accedidas dentro del bloque donde fueron declaradas. A su vez, no pueden ser actualizadas o redeclaradas, lo que significa que el valor permanece constante dentro de su bloque
Const variables are also block scoped. So Const declarations can only be accessed within the block they were declared. Another characteristic is that const cannot be updated or re-declared. This means that a variable declared with const maintain a constant value. 
- IFFE:
Inmediatly invoke function expresion// Expresion de función que se invoca inmediatamente
(function () {
    var foo = "ABC";
    // Esto imprime "ABC"
    console.log(foo);
})();
// ReferenceError: foo is not defined
console.log(foo);


¿Diferencia entre "== vs ==="?
La diferencia es que mientras que con él == antes de hacer la comparación se convierten ambos datos en un tipo común. Con === ninguno de estos valores se convierte de manera implícita antes de ser comparado.
 - cómo funciona la herencia en Javascript (entender el concepto de prototype inheritance)
Es la capacidad de un constructor de heredar propiedades y métodos de otro constructor. En Js. Se maneja con prototipos que toman los métodos pasados por sus padres mediante la prototype chain.

It is the capacity or ability of the constructor to inherit other properties and methods from another constructor. When speaking of JS we can talk about prototypes that take those methods from previous constructors through the “prototype chain”
 
- que es una Clase
a class is basically a blueprint for an object. JavaScript classes provide a much clearer and simpler syntax for creating objects and dealing with inheritance. They are special functions that allow us to define specific objects and methods associated with that object. You always have to have a constructor as the main method
son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript.
Vendrían a ser como un plano de construcción de un objeto.

Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia. 
Son funciones especiales que permiten definir objetos específicos y métodos asociados a ese objeto. Siempre tiene que tener un constructor como método principal


 
-que elementos componen una clase de ES6?: 
Propiedades del constructor y métodos. 
properties and methods 
-Cuáles son los diferentes tipos de errores en JavaScript?
Se pueden encontrar tres tipos de errores:
-Errores de tiempo de carga: Son los errores que se originan al cargar una página web, como son los errores de sintaxis inadecuados, los cuales se conocen como errores de tiempo de carga y producen los errores dinámicamente.
-Errores de tiempo de ejecución: Son los errores producidos motivado al mal uso del comando dentro del lenguaje HTML.
-Errores lógicos: Estos errores se producen debido a la mala lógica realizada en una función que tiene una operación distinta.

We can find three different kind of errors:
-Errors in loading time: these kinds of errors originate when loading a website. These errors occur because of inadequate syntax, which are known as errors in loading time and produce dynamic errors
-Errors in time execution: they are produced due to a wrongful use of the HTML command
-Logical Errors: they are produced because of a wrong kind of logic was executed in a function that has a different kind of operation 
-como se asigna un evento?:
selectElementById=>addEventListener..
 - qué tipos de funciones conoces
(normales y las arrow)
Funciones tradicionales o estándar: Se crean mediante la declaración function.
Traditional or standard functions: they are created through
the “function” word
Funciones Flecha o arrow: introducidas en la versión ES6 de JavaScript. Para declarar estas funciones se declara primero una variable y luego, tras los posibles parámetros, se escribe el conjunto de símbolos =>, que son la representación de una flecha.
Arrow function: they were introduced in ES6 version of JavaScript. In order to declare this function, we need to declare first a variable and then, you write the symbols “=>,” that is the arrow representation 
 
- cuál es la diferencia entre las arrow y las normales 
Una de las grandes diferencias es el contexto. En las regulares el contexto se define al llamarlas y en las flecha al declararlas. 

En las funciones estándar, el this suele tomar el ámbito de window o donde se ejecuta la función. Y para controlarlo se utilizan los métodos de bind,apply y call.

En las funciones flecha, this  hace referencia a la instancia del objeto en el que se declara la función. 

One of the greatest differences is the context.  In the regular function, the context is defined when we call  them, while in the arrow function when  we declare them. 
In the Standard function, usually the “this” takes the place of the window or where the function is executed. To handle it, we can use the methods of “bind”, “apply” or “call” 
In the arrow function the “this” refers to the object instance where the function is declared.
 
- cómo maneja JS los pedidos asincrónicos (tener bien en claro el proceso del call stack, event loop)
 
Since Javascript is single thread, the code gets pushed and executed one by one as the interpreter reads the program, and gets popped out once the execution is done. If the statement is asynchronous like a promise, then that code its taken and send it to an Event queue, that is responsible for moving your asynchronous code after specified time so that they do not block subsequent Js code from running.
 The queued operations will complete as soon as possible then return their results to the JavaScript environment.
Promises can chain multiple async operations and has a better error handling

El event loop es un bucle de un solo proceso que monitorea la call stack y verifica si hay trabajo por hacer en la cola de tareas.
 Si la pila de llamadas está vacía y hay funciones de devolución de llamada en la cola de tareas, una función se retira de la cola y se envía a la pila de llamadas para que se ejecute.
Es un patrón de diseño que recibe las peticiones asincrónicas y permite así que estas no bloqueen la ejecución del programa.

Dado que Javascript es single thread, el código se ejecuta uno por uno a medida que el intérprete lee el programa. Si la declaración es asincrónica como una promesa, entonces ese código se toma y se envía a una event queue, que es responsable de mover el código asincrónico para que no bloqueen la ejecución del código Js posterior.
 Las operaciones en la queue se completarán lo antes posible y luego devolverán sus resultados al entorno de JavaScript.
Las promesas pueden encadenar múltiples operaciones asíncronas y tienen un mejor manejo de errores


 -Que es una callback function
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
Una Callback function es una función que se pasa a otra como argumento, y que luego es invocada dentro de la función exterior para completar alguna acción

- PROMESAS (hablar de promesas y si queres de async await) - tener masomenos claro el tema del then/catch de una promesa

Un modo de controlar los pedidos asincrónicos son las Callback, pero puede generar un callback hell, es por eso que es preferible utilizar promesas.

Una promesa es un método que te permite realizar funciones asíncronas. (agregado por barto)
A Promise is a way to handle the asynchronus operations in Javascript, and it is an object that represents an eventual value. It is eventual because it can be available at the moment, in the future or never, because a promise has three states: pending, fulfilled or rejected
Una promesa es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. Ya que puede tener 3 estados: pending, fulfilled, rejected. A su vez podemos trabajar de dos maneras con las promesas: Utilizando then , o el método async await.

EJEMPLO DE PROMESA:

let promesa = new Promise((resolve, reject) => {
  let cuenta = 1 + 2;
  if (cuenta === 3) {
    resolve("You Succeded");
  } else {
    reject("You Failed");
  }
});
promesa
  .then((message) => console.log("The result is: ", message))
  .catch((message) =>
    console.log("im inside the catch method, because ", message)
  );

-PREVENTDEFAULT:
The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not happen. // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.

*/
