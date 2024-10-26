import { useState } from "react";
import style from "./IniciarSesion.module.css";
import { BotonComponente } from "../../Componentes/ui/boton";
import { iniciarSesionApi } from "../../servicios/login";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import Swal from "sweetalert2";

const IniciarSesion = () => {
  const navigate = useNavigate(); 
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [cargando, setCargando] = useState(false);
  const [verContraseña, setVerContraseña] = useState(false);

  const loginPeticion = async () => {
    setCargando(true); 
    try {
      const informacionDelUsuarioLogueado = await iniciarSesionApi(
        correo,
        contraseña
      );
      localStorage.setItem(
        "usuario",
        JSON.stringify(informacionDelUsuarioLogueado)
      );
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/eventos");
    } catch (error: unknown) {
      const mensajeError = "Algo salió mal, por favor intente nuevamente.";
      Swal.fire({
        icon: "error",
        title: "Error",
        showConfirmButton: true,
        text: mensajeError,
      });
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className={style.contenedor_iniciar_sesion}>
      <div className={style.contenedor_formulario}>
        <div className={style.header}>
          <h1>Iniciar sesión </h1>
        </div>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <div className={style.input_contraseña}>
          <input
            type={verContraseña ? "text" : "password"}
            placeholder="Ingresa tu contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <button onClick={() => setVerContraseña(!verContraseña)}>
            {verContraseña ? <EyeOff /> : <Eye />}
          </button>
        </div>

        <BotonComponente
          label={cargando ? "Cargando..." : "Inicia sesion"}
          onClick={loginPeticion}
        />

        <div className={style.container_texto_footer}>
          <p>
            ¿No tienes cuenta? <a href="/registrarse">Registrate</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
