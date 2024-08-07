import styles from "./Registrarse.module.css";
import { BotonComponente } from "../../Componentes/ui/boton";
import { useState } from "react";
import { registrarUsuarioApi } from "../../servicios/users";

const Registrarse = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contraseña, setContraseña] = useState("");
  console.log("INFORMACION", nombre, apellido, correoElectronico, contraseña);

  const crearUsuarioPeticion = async() => {
   await registrarUsuarioApi({
      nombre,
      apellido,
      correo: correoElectronico,
      contraseña,
      rol: "organizador",
    });
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.seccion_imagen}>
        <img src="/registrarse.png" alt="" />
      </div>
      <div className={styles.seccion_formulario}>
        <div className={styles.header}>
          <h1>Registrarse</h1>
        </div>
        <div className={styles.contenedor_formulario}>
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
          <BotonComponente label="Crear cuenta" onClick={crearUsuarioPeticion}/>
        </div>
      </div>
    </div>
  );
};

export default Registrarse;
