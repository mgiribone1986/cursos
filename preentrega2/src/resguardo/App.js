/*
Se debe entregar.



Crea una carpeta dentro de src llamada components que contenga la implementación del componente NavBar dentro del archivo NavBar.js. 
Su funcionalidad es la de renderizar una barra de menú (Navbar).

Objetivos.


Crear el menú e-commerce de tu proyecto.

Brand (título/nombre de la tienda)
Un listado de categorías clickeables
Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional).

Consigna.

Crea un componente CartWidget con un ícono y una notificación mostrando un número hardcodeado (fijo). 
Este servirá luego para indicar la cantidad de elementos que tenemos en el carrito, pero por ahora, 
mostrará un número hardcodeado (colocado en el código). Ubica este componente (CartWidget) dentro de Navbar.. Agrega algunos estilos con bootstrap/materialize u otro.

Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado. FALTA ESTOP

Objetivos.



Crea un componente CartWidget.js que haga rendering de un ícono Cart, e inclúyelo dentro de NavBar.js para que esté visible en todo momento.
Crea un componente ItemListContainer. Impórtalo dentro de App.js, y abajo de NavBar.js. 

Crear la landing de tu proyecto.

Deberás corroborar que tu proyecto cuente con:
Componente Navbar.Js

*/

import ProfileCard from "./components/ProfileCard/ProfileCard";

import AlexaImg from "./img/alexa.png"
import CortanaImg from "./img/cortana.png"
import SiriImg from "./img/siri.png"
import "bulma/css/bulma.css"

console.log(SiriImg);
console.log(CortanaImg);
console.log(AlexaImg);



function App(){
    
    return (
    <div className="container">
        <div className="columns">
            <div classnName="columns is-4">        
                <h1>Asistentes</h1>
            </div>
        </div>
        <div>
            <ProfileCard titulo="Añela" arroba="@asdas" img={AlexaImg}/>
                <div>
                    <p>Texto</p>
                </div>
            <ProfileCard titulo="tuvieja" arroba="@asdas" img={CortanaImg}/>
            <ProfileCard titulo="tuvieja99" arroba="@asdas" img={SiriImg}/>
        </div>
    </div>)
}

export default App;


//npm install bulma libreria para utilizar  bulma libreria css
