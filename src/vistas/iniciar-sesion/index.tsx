import { useState } from "react";
import style from "./IniciarSesion.module.css";
import { BotonComponente } from "../../Componentes/ui/boton";

const IniciarSesion = () => {
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contraseña, setContraseña] = useState("");
  return (
    <div className={style.contenedor_iniciar_sesion}>
      <div className={style.contenedor_izquierdo}>
        <div className={style.contenedor_formulario}>
          <div className={style.header}>
            <h1>Iniciar sesion </h1>
          </div>
          <input
            type="text"
            placeholder="Ingresa tu correo"
            value={correoElectronico}
            onChange={(e) => setCorreoElectronico(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ingresa tu contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <BotonComponente label="Inicia sesion" />
        </div>
      </div>

      <div className={style.contenedor_derecho}>
        <h1>IMAGEN</h1>
      </div>
    </div>
  );
};

export default IniciarSesion;
