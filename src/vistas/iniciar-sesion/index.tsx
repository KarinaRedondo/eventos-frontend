import { useState } from "react";
import style from "./IniciarSesion.module.css";
import { BotonComponente } from "../../Componentes/ui/boton";
import { iniciarSesionApi } from "../../servicios/login";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const IniciarSesion = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [cargando, setCargando] = useState(false);

  const loginPeticion = async () => {
    setCargando(true); // Comienza la carga
    try {
      const data = await iniciarSesionApi(correo, contraseña);
      localStorage.setItem("usuario", JSON.stringify(data)); // Guardar en localStorage
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/eventos"); // Redireccionar a /eventos
    } catch (error: unknown) {
      let mensajeError = "Algo salió mal, por favor intente nuevamente.";
      if (error instanceof Error) {
        if (
          typeof error === "object" &&
          error !== null &&
          "response" in error &&
          typeof error.response === "object" &&
          error.response !== null &&
          "data" in error.response
        ) {
          mensajeError = error.response.data as string;
        } else {
          mensajeError = error.message;
        }
      }
      Swal.fire({
        icon: "error",
        title: "Error",
        text: mensajeError,
      });
    } finally {
      setCargando(false); // Finaliza la carga
    }
  };

  return (
    <div className={style.contenedor_iniciar_sesion}>
      <div className={style.contenedor_formulario}>
        <div className={style.header}>
          <h1>Iniciar sesion </h1>
        </div>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <BotonComponente
          label={cargando ? "Cargando..." : "Inicia sesion"}
          onClick={loginPeticion}
        />
      </div>
    </div>
  );
};

export default IniciarSesion;
