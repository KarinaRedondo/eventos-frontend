import styles from "./TarjetaEvento.module.css";

interface PropiedadesTarjeta {
  nombre: string;
  descripcion: string;
  ubicacion: string;
  capacidadMaxima: number;
}

const TarjetaEvento = ({
  nombre,
  descripcion,
  ubicacion,
  capacidadMaxima,
}: PropiedadesTarjeta) => {
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
    </div>
  );
};

export default TarjetaEvento;
