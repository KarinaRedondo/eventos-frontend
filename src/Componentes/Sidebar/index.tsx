import styles from "./Sidebar.module.css";
import { Menu, Home } from "react-feather";
import { Link } from "react-router-dom";
interface Props {
  abrirSidebar: boolean;
  altenarSidebar: () => void;
}
const Sidebar = ({ abrirSidebar, altenarSidebar }: Props) => {
  return (
    <div
      className={`${styles.sidebar} ${
        abrirSidebar ? styles.sidebarAbierto : styles.sidebarCerrado
      }`}
    >
      <div className={styles.headerSidebar}>
        <button onClick={altenarSidebar}>
          <Menu></Menu>
        </button>
      </div>
      <Link to={"/eventos"}>
        <span className={styles.icono}>
          <Home />
        </span>
        <span className={styles.nombreVista}>Evento</span>
      </Link>
    </div>
  );
};

export default Sidebar;
