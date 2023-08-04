/* 
PREGUNTAS REACT
¿Que es React?
React es una biblioteca de código abierto de Javascript, diseñada por ingenieros de Facebook para crear interfaces de usuario. Está basada en la componentización de la UI: la interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.
Las características principales de React son:
Componentes: React está basado en la componetización de la UI. La interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.
Virtual DOM: React usa un DOM virtual para renderizar los componentes. El DOM virtual es una representación en memoria del DOM real. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz. En lugar de modificar el DOM real, React modifica el DOM virtual y, a continuación, compara el DOM virtual con el DOM real. De esta forma, React sabe qué cambios se deben aplicar al DOM real.
Declarativo: React es declarativo, lo que significa que no se especifica cómo se debe realizar una tarea, sino qué se debe realizar. Esto hace que el código sea más fácil de entender y de mantener.
Unidireccional: React es unidireccional, lo que significa que los datos fluyen en una sola dirección. Los datos fluyen de los componentes padres a los componentes hijos.
Universal: React se puede ejecutar tanto en el cliente como en el servidor. Además, puedes usar React Native para crear aplicaciones nativas para Android e iOS.


Que es DOM?
El DOM es la estructura de objetos que genera el navegador cuando se carga un documento y se puede alterar mediante Javascript para cambiar los contenidos y aspecto de la página.
The DOM is the structure of objects that the browser generates when a document is loaded and can be altered using Javascript to change the contents and appearance of the page.

¿Cuál es la diferencia entre componente y elemento en React?
Un componente es una función o clase que recibe props y devuelve un elemento. Un elemento es un objeto que representa un nodo del DOM o una instancia de un componente de React.

¿Cuál es la diferencia entre state y props?
Las props son un objeto que se pasan como argumentos de un componente padre a un componente hijo. Son inmutables y no se pueden modificar desde el componente hijo.
El state es un valor que se define dentro de un componente. Su valor es inmutable (no se puede modificar directamente) pero se puede establecer un valor nuevo del estado para que React vuelva a renderizar el componente.
Explicar qué son los Hooks
Los Hooks son unas herramientas por así decirlo, de React que nos permite tener acceso al estado, y otras características como los ciclos de vida de los componentes de React, cuando son creados con una function
Hooks es una nueva característica que te permite utilizar los states y otras características de React, como los ciclos de vida sin tener que escribir una clase.
hooks are a new feature that allows us to use state and other characteristics from react such as the lifecycles without the need of using a Class
-Que elementos tiene(nombras hooks,ciclos de vida y estado):
hooks: useState, useEffect, useContext, useRef, etc
ciclos de vida: inicialización,etapa de montaje,actualización,etapa de desmontaje
 - diferencia entre codear con componentes de clase o con Hooks.
Los Hooks nos permiten tener ciertas características de React, como el estado, en los componentes creados con una función. A su vez nos permiten trabajar con los ciclos de vida de los componentes a través de un código más prolijo y simplificado
.
- cómo funciona el useState
Recibe un parámetro:
El valor inicial de nuestra variable de estado.
Devuelve un array con dos variables:
En primer lugar tenemos la variable que contiene el valor
La siguiente variable es una función set, requiere el nuevo valor del estado, y este modifica el valor de la variable anterior mencionada
Cabe destacar que la función proporciona cómo parámetro el valor actual del propio estado. Ex: setIsOpen(isOpen => !isOpen)
Devuelve un valor con estado y una función para actualizarlo. dicha función se usa para actualizar el estado. Acepta un nuevo valor de estado y sitúa en la cola una nueva renderización del componente.
Returns a stateful value and a function to update it. It Accepts a new state value and send it to the queue for a new render of the component.

- cómo funciona el useEffect
Permite tener acceso a los ciclos de vida de un componente y ejecutar código cuando se renderiza el componente o cuando cambian las dependencias del efecto. Es como una combinación de componentDidMount, componentDidUpdate y componentWillUnmount
It allows us to manage side effects without the need for class components, and to extract and reuse the logic of an effect from a component. Its like a combination of  componentDidMount, componentDidUpdate y componentWillUnmount
- como es el LifeCycle de un componente.
Un componente comienza por su inicialización y etapa de montaje, seguido de la etapa de actualización y posterior etapa de desmontaje

A component begins with its initialization and assembly or mounting stage, followed by the update stage and subsequent unmounting stage


- que lifecycle methods conoces (componentDidMount, componentWillUpdate etc)
https://learn.co/lessons/react-component-mounting-and-unmounting#:~:text=In%20the%20unmounting%20(or%20deletion,is%20removed%20from%20the%20DOM.
MOUNTING PHASE:
we have access to two lifecycle methods: componentWillMount, and
componentDidMount.
componentWillMount :is called only once in the component lifecycle, immediately before the component is rendered. In picnic terms, componentWillMount is
the moment when you arrive at the field with your picnic blanket and you make
sure the spot you've chosen is nice 
componentDidMount is called once, immediately after the render() method has taken place. That means that the HTML for the React component has been rendered into the DOM and can be accessed if necessary. This method is used to perform any DOM manipulation of data-fetching that the component might need.Suppose we were building a weather app that fetches data on the current weather and displays it to the user. We would want this data to update every 15 seconds without the user having to refresh the page

tenemos acceso a dos métodos de ciclo de vida: componentWillMount y componentDidMount. componentWillMount: se llama solo una vez en el ciclo de vida del componente, inmediatamente antes de que se procese el componente. En términos de picnic, componentWillMount es el momento en que llegas al campo con tu manta de picnic y haces
seguro que el lugar que has elegido es bonito. Se llama a componentDidMount una vez, inmediatamente después de que se haya realizado el método render (). Eso significa que el HTML para el componente React se ha procesado en el DOM y se puede acceder a él si es necesario. Este método se utiliza para realizar cualquier manipulación DOM de obtención de datos que el componente pueda necesitar. 

UPDATING PHASE:
The componentDidUpdate method is called when a component got updated. This might happen if new props have been provided by a parent component or an internal state has been changed.The componentDidUpdate gets called after a render, which means that we can access DOM nodes in it. This function receives previous props and state as parameters.
For example a popular scenario is when you need to request data from a server or remote API due to changes in component’s props.
El método componentDidUpdate se llama cuando se actualiza un componente. Esto puede suceder si un parent proporciona nuevos props o si se ha cambiado un estado interno. El componenteDidUpdate se llama después de renderizado, lo que significa que podemos acceder a los nodos DOM en él. Esta función recibe apoyos y estados anteriores como parámetros.
Por ejemplo,  cuando necesitamos solicitar datos de un servidor o API remota debido a cambios en los accesorios del componente.

UNMOUNTING PHASE:

ComponentWillUnmount: se llama cuando el componente esta por ser removido del DOM.
In the unmounting phase, we have the componentWillUnmount method which is the last function to be called immediately before the component is removed from the DOM. It is generally used to perform clean-up for any DOM-elements or timers created in componentWillMount. for example we can unsubscribe of the global store, or remove events that we had subscribed before in the mounting phase, or use the clear interval if we had a setinterval
En la fase de desmontaje, tenemos el método componentWillUnmount, que es la última función que se llama inmediatamente antes de que el componente se elimine del DOM. Generalmente se usa para realizar la limpieza de cualquier elemento DOM o temporizador creado en componentWillMount. por ejemplo, podemos cancelar la suscripción de la global store, o eliminar eventos a los que nos habíamos suscrito antes en la fase de montaje, o usar el clearInterval si tuviéramos un setinterval


- como ordenar el código en React (usar components tontos y containers)
Una de las formas de ordenar el código es utilizar componentes dummies o tontos, que solo renderizan información. Y componentes Containers que poseen la lógica.
Literalmente uno tiene un estado y el otro no: Contenedor y Componente o componente inteligente y tonto. Eso significa que el componente con estado sigue los cambios de la información que se maneja y el sin estado  imprime  lo que le es pasado por medio de props.
- como usar css en React (con css modules o una librería de css-in-js como styled-components)
React ofrece varias posibilidades para utilizar estilos. Podemos utilizar ccs modules, Sass, o librerías como Styled-components.
-como se asigna un evento?:
“onClick={eventFn}”
que es la accesibilidad web?
La accesibilidad web es la práctica inclusiva de garantizar que los sitios web, las herramientas y las tecnologías estén diseñados y desarrollados para que las personas con discapacidad puedan usarlas.
Web accessibility is the inclusive practice of ensuring that websites, tools and technologies are designed and developed so that people with disabilities can use them.
https://www.w3c.es/Traducciones/es/WAI/intro/accessibility
REDUX
-qué es REDUX
A library that makes easier the management of the state in our application, in an orderly and centralized way by creating a global store which can be accessed by all the components to require the stored information.

Una librería que facilita el manejo del estado en nuestra aplicación, de una manera ordenada y centralizada al crear una store global al cual pueden acceder todos los componentes para requerir la información almacenada.

-Como funciona Redux
 Redux posee “ACTIONS”, “REDUCERS”, “STORE”:
        	        	-Actions: objetos planos de Js con 2 atributos: “type” y “data”, que se almacena en la store de la aplicación.Estos objetos se crean desde la vista de la aplicación con algún tipo de interacción.
        	        	-Reducers: es una Fx que se encarga de leer la store actual y actualiza en base al action type y action data que generamos desde la vista.
        	        	-Store: es donde se almacena la información de manera global para que pueda ser accedida por cualquier componente que lo requiera.
useSelector
The equivalent of map state to props is useSelector. It takes in a function argument that returns the part of the state that you want.
El equivalente a mapstatetoProps. toma un argumento de función que retorna la parte del state que queremos.

useDispatch

el equivalente a mapDispatchToProps.
The equivalent of map dispatch to props is useDispatch. We will invoke useDispatch and store it to a variable, dispatch. Dispatch will work with the allActions imported from the actions folder. 

*/
