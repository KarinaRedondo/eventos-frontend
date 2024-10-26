import React, { useState } from "react";
import { X, Search, UserCheck, UserX } from "react-feather";
import styles from "./ModalAsistentes.module.css";

interface Asistente {
  id: string;
  identificacion: number;
  nombre: string;
  idEvento: string;
  estadoAsistencia: string;
}

interface ModalAsistentesProps {
  asistentes: Asistente[];
  isOpen: boolean;
  onClose: () => void;
}

const ModalAsistentes = ({
  asistentes,
  isOpen,
  onClose,
}: ModalAsistentesProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const asistentesFiltrados = asistentes?.filter(
    (asistente) =>
      asistente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asistente.identificacion.toString().includes(searchTerm)
  );

  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <h2>Asistentes al evento</h2>
          <button onClick={onClose} className={styles.close_button}>
            <X />
          </button>
        </div>

        <div className={styles.search_container}>
          <Search className={styles.search_icon} />
          <input
            type="text"
            placeholder="Buscar asistentes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.search_input}
          />
        </div>

        <div className={styles.asistentes_list}>
          {asistentesFiltrados.map((asistente) => (
            <div key={asistente.id} className={styles.asistente_card}>
              <UserCheck className={styles.asistente_icono} />
              <div className={styles.asistente_info}>
                <h4 className={styles.asistente_nombre}>{asistente.nombre}</h4>
                <p className={styles.asistente_identificacion}>
                  ID: {asistente.identificacion}
                </p>
                <p className={styles.asistente_estado}>
                  Estado: {asistente.estadoAsistencia}
                </p>
              </div>
              <div className={styles.estado_icono}>
                {asistente.estadoAsistencia === "Asistió" ? (
                  <UserCheck className={styles.icono_asistio} />
                ) : (
                  <UserX className={styles.icono_no_asistio} />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.total_asistentes}>
          <p>Total de asistentes: {asistentesFiltrados.length}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalAsistentes;
