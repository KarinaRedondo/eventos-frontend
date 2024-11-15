import { useState, useEffect } from "react";
import { obtenerEventos } from "../../servicios/eventos/eventos";
import { Evento } from "../../models/eventos";
import styles from "./RegistroEventos.module.css";
import { Calendar, MapPin } from "react-feather";
import ModalRegistro from "./Registro";
import { useNavigate } from "react-router-dom";

const Asistentes = () => {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventoSeleccionado, setEventoSeleccionado] = useState<Evento | null>(
    null
  );
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState("");

  useEffect(() => {
    cargarEventos();
  }, []);

  const cargarEventos = async () => {
    try {
      const listaDeEventos = await obtenerEventos();
      setEventos(listaDeEventos);
    } catch (error) {
      console.error("Error al cargar eventos:", error);
    }
  };

  const abrirModalRegistro = (evento: Evento) => {
    setEventoSeleccionado(evento);
    setIsModalOpen(true);
  };

  const cerrarModalRegistro = () => {
    setIsModalOpen(false);
    setEventoSeleccionado(null);
  };

  const mostrarMensajeConfirmacion = (mensaje: string) => {
    setMensajeConfirmacion(mensaje);
    setTimeout(() => setMensajeConfirmacion(""), 3000);
  };

  return (
    <>
      <div className={styles.header}>
        <h1>Asistentes</h1>
        <div className={styles.botones}>
          <button onClick={() => navigate("/registrarse")}>Registro</button>
          <button onClick={() => navigate("/iniciar-sesion")}>
            Iniciar Sesion
          </button>
        </div>
      </div>
      <div className={styles.registro_eventos}>
        <h1>Registro a Eventos</h1>

        {mensajeConfirmacion && (
          <div className={styles.mensaje_confirmacion}>
            {mensajeConfirmacion}
          </div>
        )}

        <div className={styles.contenedor_tarjetas}>
          {eventos.map((evento) => (
            <div key={evento.id} className={styles.tarjeta_evento}>
              <h2 className={styles.nombre_evento}>{evento.nombre}</h2>
              <div className={styles.contenedor_info}>
                <p>
                  <Calendar /> {evento.fechaInicio} - {evento.fechaFin}
                </p>
                <p>
                  <MapPin /> {evento.ubicacion}
                </p>
                <p>Cupo Máximo: {evento.capacidadMaxima}</p>
              </div>

              <div className={styles.contenedor_botones}>
                <button
                  className={styles.btn_registro}
                  onClick={() => abrirModalRegistro(evento)}
                >
                  Registrarse al evento
                </button>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && eventoSeleccionado && (
          <ModalRegistro
            evento={eventoSeleccionado}
            isOpen={isModalOpen}
            onClose={cerrarModalRegistro}
            onRegisterSuccess={mostrarMensajeConfirmacion}
          />
        )}
      </div>
    </>
  );
};

export default Asistentes;
