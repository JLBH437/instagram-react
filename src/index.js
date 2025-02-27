import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx"; //Eu não sei o motivo, e desisto de tentar entender, mas corrigir essa linha faz tudo parar de funciona, então vou deixar aqui, tomar 8L de café e tentar entender após isso.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
