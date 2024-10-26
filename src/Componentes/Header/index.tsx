import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { User } from "../../models/user";

const Header = () => {
  const [usuario, setUsuario] = useState<User>({
    nombre: "EDGAR",
    apellido: "Matos",
    id: "1",
    contraseña: "",
    correo: "",
    rol: "",
  });

  useEffect(() => {
    const storedUsuario = localStorage.getItem("usuario");
    if (storedUsuario) {
      setUsuario(JSON.parse(storedUsuario));
    }
  }, []);

  return (
    <div className={styles.cn_header}>
      <div className={styles.logo}>
        {usuario && (
          <div className={styles.avatar}>
            {usuario.nombre.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className={styles.info_User}>
        <span>
          {usuario ? `Bienvenido, ${usuario.nombre}` : "Usuario no disponible"}
        </span>
      </div>
    </div>
  );
};

export default Header;
