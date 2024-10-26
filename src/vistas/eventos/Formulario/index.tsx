import { ModalComponente } from "../../../Componentes/Modal";
import styles from "./Formulario.module.css";

interface FormularioProps {
  modoEdicion?: boolean;
  abrirModal: boolean;
  nombre?: string;
  descripcion?: string;
  fechaInicio?: string;
  fechaFin?: string;
  capacidadMaxima?: number;
  ubicacion?: string;
  setAbrirModal: React.Dispatch<React.SetStateAction<boolean>>;
  setNombre: React.Dispatch<React.SetStateAction<string>>;
  setDescripcion: React.Dispatch<React.SetStateAction<string>>;
  setFechaInicio: React.Dispatch<React.SetStateAction<string>>;
  setFechaFin: React.Dispatch<React.SetStateAction<string>>;
  setCapacidadMaxima: React.Dispatch<React.SetStateAction<number>>;
  setUbicacion: React.Dispatch<React.SetStateAction<string>>;
  crearEventoFuncion?: () => Promise<void>;
  editarEventoFuncion?: () => Promise<void>;
}

export const Formulario = ({
  abrirModal,
  setAbrirModal,
  setNombre,
  setDescripcion,
  setFechaInicio,
  setFechaFin,
  setCapacidadMaxima,
  setUbicacion,
  crearEventoFuncion,
  editarEventoFuncion,
  modoEdicion,
  nombre = "",
  descripcion = "",
  fechaInicio = "",
  fechaFin = "",
  capacidadMaxima = 0,
  ubicacion = "",
}: FormularioProps) => {
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (modoEdicion && editarEventoFuncion) {
      await editarEventoFuncion();
    } else if (crearEventoFuncion) {
      await crearEventoFuncion();
    }
    setAbrirModal(false);
  };

  return (
    <ModalComponente
      openModal={abrirModal}
      setOpenModal={setAbrirModal}
      nombreModal={modoEdicion ? "Editar evento" : "Crear evento"}
    >
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <div className={styles.inputFormulario}>
          <label>Nombre del evento</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del evento"
            defaultValue={nombre} // esta propiedad se usa para que muestre al abrir el modal de editar el valor correspondiente al input, en este caso el nombre del evento
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className={styles.inputFormulario}>
          <label>Descripción</label>
          <input
            type="text"
            name="descripcion"
            placeholder="Ingresa una descripción"
            defaultValue={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div className={styles.inputFormulario}>
          <label>Fecha de inicio</label>
          <input
            type="date"
            defaultValue={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
        </div>

        <div className={styles.inputFormulario}>
          <label>Fecha de fin</label>
          <input
            type="date"
            defaultValue={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
        </div>

        <div className={styles.inputFormulario}>
          <label>Capacidad máxima</label>
          <input
            type="number"
            defaultValue={capacidadMaxima}
            onChange={(e) => setCapacidadMaxima(e.target.valueAsNumber)}
          />
        </div>

        <div className={styles.inputFormulario}>
          <label>Ubicación</label>
          <input
            type="text"
            defaultValue={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
          />
        </div>

        <button type="submit">{modoEdicion ? "Actualizar" : "Crear"}</button>
      </form>
    </ModalComponente>
  );
};
