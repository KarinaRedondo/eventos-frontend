import { Edit, Trash } from "react-feather";
import { eliminarEvento } from "../../servicios/eventos/eventos";
import styles from "./TarjetaEvento.module.css";

interface PropiedadesTarjeta {
  nombre: string;
  descripcion: string;
  ubicacion: string;
  capacidadMaxima: number;
  eventoId: string;
}

const TarjetaEvento = ({
  nombre,
  descripcion,
  ubicacion,
  capacidadMaxima,
  eventoId,
}: PropiedadesTarjeta) => {
  const eliminarEventoFuncion = async () => {
    await eliminarEvento(eventoId);
  };
  return (
    <div className={styles.tarjeta_evento}>
      <h2 className={styles.nombre_evento}>{nombre}</h2>
      <div className={styles.contenedor_items}>
        <div className={styles.item_tarjeta}>
          <span>Descripcion:</span>
          <p>{descripcion}</p>
        </div>
        <div className={styles.item_tarjeta}>
          <span>Ubicacion:</span>
          <p>{ubicacion}</p>
        </div>
        <div className={styles.item_tarjeta}>
          <span>Cupo Maximo:</span>
          <p>{capacidadMaxima}</p>
        </div>
      </div>

      <div className={styles.contenedor_botones}>
        <button className={styles.btn_editar}>
          <Edit />
        </button>
        <button className={styles.btn_eliminar} onClick={eliminarEventoFuncion}>
          <Trash />
        </button>
      </div>
    </div>
  );
};

export default TarjetaEvento;
