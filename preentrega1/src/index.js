
//1)importar las libreritas y React y ReactDom
//la libreria React va a definir que es un componente y como funcionan juntos los mismos
import React from "react";

//la libreria sabe hacer que un componente en pantalla.
import ReactDOM from "react-dom/client";

import App from "./App";

//2)obtener una referencia al div con id root

const el = document.getElementById("root")

//3)Le decimos a React que tome control del elemento 

const root = ReactDOM.createRoot(el);


root.render(<App/>)

