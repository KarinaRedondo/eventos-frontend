import styles from "./Registrarse.module.css";
import { BotonComponente } from "../../Componentes/ui/boton";
import Swal from "sweetalert2";
import { Eye, EyeOff } from "react-feather";
import { useState } from "react";
import { registrarUsuarioApi } from "../../servicios/users";

const Registrarse = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [verContraseña, setVerContraseña] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log(error, isLoading);

  const crearUsuarioPeticion = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await registrarUsuarioApi({
        nombre,
        apellido,
        correo: correoElectronico,
        contraseña,
        rol: "organizador",
      });

      Swal.fire({
        icon: "success",
        title: "Usuario registrado",
        text: "El usuario ha sido registrado con éxito.",
      });
    } catch (err: unknown) {
      let errorMessage = "Error desconocido";

      if (err instanceof Error) {
        errorMessage = err.message || "Error al registrar el usuario";
      }

      setError(errorMessage);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.seccion_formulario}>
        <div className={styles.contenedor_formulario}>
          <div className={styles.header}>
            <h1>Registrarse</h1>
          </div>
          <div className={styles.grupo_input}>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="text"
              placeholder="Ingresa tu apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Correo electronico"
            value={correoElectronico}
            onChange={(e) => setCorreoElectronico(e.target.value)}
          />

          <div className={styles.input_contraseña_registrarse}>
            <input
              type={verContraseña ? "text" : "password"}
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            <button onClick={() => setVerContraseña(!verContraseña)}>
              {verContraseña ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <BotonComponente
            label="Crear cuenta"
            onClick={crearUsuarioPeticion}
          />
          <div className={styles.container_texto_footer_registrarse}>
            <p>
              ¿Ya tienes cuenta?{" "}
              <a href="/iniciar-sesion">Inicia Sesión Aquí</a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.seccion_imagen}>
        <h1>IZQUIERDA</h1>
      </div>
    </div>
  );
};

export default Registrarse;
