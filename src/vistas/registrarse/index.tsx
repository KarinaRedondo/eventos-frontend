import styles from "./Registrarse.module.css";
import { BotonComponente } from "../../Componentes/ui/boton";
import useRegistrar from "../../hooks/usuarios/useRegistrar";

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
          <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <BotonComponente
            label="Crear cuenta"
            onClick={crearUsuarioPeticion}
          />
        </div>
      </div>
      <div className={styles.seccion_imagen}>
        <h1>IZQUIERDA</h1>
      </div>
    </div>
  );
};

export default Registrarse;
