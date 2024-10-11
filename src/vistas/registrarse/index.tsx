import styles from "./Registrarse.module.css";
import { BotonComponente } from "../../Componentes/ui/boton";
import useRegistrar from "../../hooks/usuarios/useRegistrar";
import { Eye, EyeOff } from "react-feather";
import { useState } from "react";

const Registrarse = () => {
  const {
    nombre,
    setNombre,
    apellido,
    setApellido,
    setCorreoElectronico,
    correoElectronico,
    contraseña,
    setContraseña,
    crearUsuarioPeticion,
  } = useRegistrar();

  const [verContraseña, setVerContraseña] = useState(false);
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
            type={verContraseña ? "text": "password"}
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <button onClick={() => setVerContraseña(!verContraseña)}>
            {verContraseña ? <EyeOff /> : <Eye/> }
          </button>
          </div>
          <BotonComponente
            label="Crear cuenta"
            onClick={crearUsuarioPeticion}
          />
          <div className={styles.container_texto_footer_registrarse}>
          <p>
            ¿Ya tienes cuenta? <a href="/iniciar-sesion">Inicia Sesión Aquí</a>
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
