import { Edit, Trash, Users, Calendar, MapPin, Info } from "react-feather";
import { eliminarEvento } from "../../servicios/eventos/eventos";
import styles from "./TarjetaEvento.module.css";
import { actualizarEventoDto } from "../../models/eventos";

interface PropiedadesTarjeta {
  nombre: string;
  descripcion: string;
  ubicacion: string;
  capacidadMaxima: number;
  fechaInicio: string;
  fechaFin: string;
  eventoId: string;
  funcionAbrirModal: (evento: actualizarEventoDto) => void;
  actualizarListaEventos?: () => void;
  abrirModalAsistentes: (eventoId: string) => void;
}

const TarjetaEvento = ({
  nombre,
  descripcion,
  ubicacion,
  capacidadMaxima,
  fechaInicio,
  fechaFin,
  eventoId,
  funcionAbrirModal,
  actualizarListaEventos,
  abrirModalAsistentes,
}: PropiedadesTarjeta) => {
  const eliminarEventoFuncion = async () => {
    try {
      await eliminarEvento(eventoId);
      actualizarListaEventos && actualizarListaEventos();
    } catch (error) {
      console.error("Error al eliminar el evento:", error);
    }
  };

  const manejarEdicion = () => {
    funcionAbrirModal({
      id: eventoId,
      nombre,
      descripcion,
      ubicacion,
      capacidadMaxima,
      fechaInicio,
      fechaFin,
    } as actualizarEventoDto);
  };

  return (
    <div className={styles.tarjeta_evento}>
      <h2 className={styles.nombre_evento}>{nombre}</h2>
      <div className={styles.contenedor_info}>
        <div className={styles.item_tarjeta}>
          <Calendar className={styles.icono} />
          <span>{`${new Date(fechaInicio).toLocaleDateString()} - ${new Date(
            fechaFin
          ).toLocaleDateString()}`}</span>
        </div>
        <div className={styles.item_tarjeta}>
          <MapPin className={styles.icono} />
          <span>{ubicacion}</span>
        </div>
        <div className={styles.item_tarjeta}>
          <Info className={styles.icono} />
          <span>Cupo máximo: {capacidadMaxima}</span>
        </div>
        <div className={styles.item_tarjeta}>
          <span>Descripción: {descripcion}</span>
        </div>
      </div>
      <div className={styles.contenedor_botones}>
        <button
          className={styles.btn_asistentes}
          onClick={() => abrirModalAsistentes(eventoId)}
        >
          <Users className={styles.icono_btn} />
          Ver asistentes
        </button>
        <button onClick={manejarEdicion} className={styles.btn_editar}>
          <Edit className={styles.icono_btn} />
        </button>
        <button className={styles.btn_eliminar} onClick={eliminarEventoFuncion}>
          <Trash className={styles.icono_btn} />
        </button>
      </div>
    </div>
  );
};

export default TarjetaEvento;
