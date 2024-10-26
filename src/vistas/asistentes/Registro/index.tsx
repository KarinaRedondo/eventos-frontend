import { useState } from "react";
import { X } from "react-feather";
import styles from "./ModalRegistro.module.css";
import { Evento } from "../../../models/eventos";
import { crearAsistente } from "../../../servicios/asistentes/asistentes";

interface ModalRegistroProps {
  evento: Evento;
  isOpen: boolean;
  onClose: () => void;
  onRegisterSuccess: (mensaje: string) => void;
}

const ModalRegistro = ({
  evento,
  isOpen,
  onClose,
  onRegisterSuccess,
}: ModalRegistroProps) => {
  const [nombre, setNombre] = useState("");
  const [identificacion, setIdentificacion] = useState<number | undefined>();
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!nombre || !identificacion) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    const nuevoAsistente = {
      identificacion,
      nombre,
      idEvento: evento.id,
      estadoAsistencia: "No asistió", // Estado inicial por defecto
    };

    try {
      await crearAsistente(nuevoAsistente);
      onRegisterSuccess(
        `Te has registrado exitosamente al evento: ${evento.nombre}`
      );
      onClose();
    } catch (error) {
      setError(
        "Error al registrarse al evento. Por favor, inténtalo de nuevo."
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <h2>Registro al evento: {evento.nombre}</h2>
          <button onClick={onClose} className={styles.close_button}>
            <X />
          </button>
        </div>

        <div className={styles.modal_body}>
          {error && <p className={styles.error}>{error}</p>}
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={styles.input}
          />
          <input
            type="number"
            placeholder="Identificación"
            value={identificacion}
            onChange={(e) => setIdentificacion(Number(e.target.value))}
            className={styles.input}
          />
          <button onClick={handleSubmit} className={styles.btn_registrar}>
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRegistro;
