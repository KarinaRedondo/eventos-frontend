import { useState } from "react";
import style from "./IniciarSesion.module.css";
import { BotonComponente } from "../../Componentes/ui/boton";
import { iniciarSesionApi } from "../../servicios/login";
import { useNavigate } from "react-router-dom";

const IniciarSesion = () => {
  const redireccion = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const loginPeticion = async () => {
    const data = await iniciarSesionApi({
      correo,
      contraseña,
    });
    if (data) {
      redireccion("/eventos");
    }
  };
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
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ingresa tu contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <BotonComponente label="Inicia sesion" onClick={loginPeticion} />
        </div>
      </div>

      <div className={style.contenedor_derecho}>
        <h1>IMAGEN</h1>
      </div>
    </div>
  );
};

export default IniciarSesion;
