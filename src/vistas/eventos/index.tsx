import { useEffect, useState } from "react";
import Layout from "../../Componentes/Layout";
import {
  crearEventoServicio,
  editarEvento,
  obtenerEventos,
} from "../../servicios/eventos/eventos";
import { actualizarEventoDto, Evento } from "../../models/eventos";
import styles from "./Eventos.module.css";
import TarjetaEvento from "../../Componentes/TarjetaEvento";
import { Formulario } from "./Formulario";
import ModalAsistentes from "./Asistentes";
import { obtenerAsistentes } from "../../servicios/asistentes/asistentes";
import { Asistente } from "../../models/asistentes";

const Eventos = () => {
  const usuario = localStorage.getItem("usuario"); // esta informacion llega en formato string
  const user = JSON.parse(usuario!); // aca se convierte en JSON para poder usarlo

  const [asistentes, setAsistentes] = useState<Asistente[]>();
  const [isModalAsistentesOpen, setIsModalAsistentesOpen] = useState(false);

  const [terminoDeBusqueda, setTerminoDeBusqueda] = useState("");

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [capacidadMaxima, setCapacidadMaxima] = useState(0);
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [eventoSeleccionado, setEventoSeleccionado] =
    useState<actualizarEventoDto | null>(null);

  const [abrirModal, setAbrirModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);

  const [eventos, setEventos] = useState<Evento[]>();

  const peticionObtenerEventos = async () => {
    const listaDeEventos = await obtenerEventos();
    setEventos(listaDeEventos);
  };

  const crearEventoFuncion = async () => {
    // siempre que vean esta estructura = async () => { piensen en una funcion
    await crearEventoServicio({
      // estas atributos los declaramos en los servicios
      nombre,
      descripcion,
      fechaInicio,
      fechaFin,
      ubicacion,
      capacidadMaxima,
      organizador: user.id,
      asistentes: [""],
    });
    setAbrirModal(false);
    peticionObtenerEventos();
  };

  // HASTA AQUI LLEGO LA EXPLICACION
  const editarEventoFuncion = async () => {
    if (eventoSeleccionado) {
      await editarEvento({
        id: eventoSeleccionado.id,
        nombre,
        descripcion,
        fechaInicio,
        fechaFin,
        ubicacion,
        capacidadMaxima,
      });
      setAbrirModal(false);
      setModoEdicion(false);
      peticionObtenerEventos();
    }
  };

  const abrirModalFuncion = () => {
    setNombre("");
    setDescripcion("");
    setFechaInicio("");
    setFechaFin("");
    setCapacidadMaxima(0);
    setUbicacion("");
    setModoEdicion(false);
    setAbrirModal(true);
  };

  const abrirModalActualizarFuncion = (evento: Evento) => {
    setEventoSeleccionado(evento);
    setNombre(evento.nombre);
    setDescripcion(evento.descripcion);
    setFechaInicio(evento.fechaInicio);
    setFechaFin(evento.fechaFin);
    setCapacidadMaxima(evento.capacidadMaxima);
    setUbicacion(evento.ubicacion);
    setModoEdicion(true);
    setAbrirModal(true);
  };

  useEffect(() => {
    peticionObtenerEventos();
  }, []);

  const eventosFiltrados = eventos?.filter(
    (evento) =>
      evento.nombre.toLowerCase().includes(terminoDeBusqueda.toLowerCase()) ||
      evento.descripcion
        .toLowerCase()
        .includes(terminoDeBusqueda.toLowerCase()) ||
      evento.ubicacion.toLowerCase().includes(terminoDeBusqueda.toLowerCase())
  );

  const abrirModalAsistentes = async (eventoId: string) => {
    try {
      const listaDeAsistentes = await obtenerAsistentes();

      const asistentesFiltrados = listaDeAsistentes.filter(
        (asistente) => asistente.idEvento === eventoId
      );

      setAsistentes(asistentesFiltrados);
      setIsModalAsistentesOpen(true);
    } catch (error) {
      console.error("Error al cargar asistentes:", error);
    }
  };
  return (
    <Layout>
      <div className={styles.header_eventos}>
        <h1>Eventos</h1>
        <h4>Dashboard/eventos</h4>
      </div>
      <div className={styles.search_container}>
        <input
          type="search"
          placeholder="Buscar eventos"
          value={terminoDeBusqueda}
          onChange={(e) => setTerminoDeBusqueda(e.target.value)}
        />
        <button onClick={abrirModalFuncion}>Crear un evento</button>
      </div>
      <div className={styles.contenedor_tarjetas_eventos}>
        {eventosFiltrados?.map((evento: Evento) => (
          <TarjetaEvento
            key={evento.id}
            nombre={evento.nombre}
            descripcion={evento.descripcion}
            capacidadMaxima={evento.capacidadMaxima}
            ubicacion={evento.ubicacion}
            fechaInicio={evento.fechaInicio}
            fechaFin={evento.fechaFin}
            eventoId={evento.id}
            funcionAbrirModal={() => abrirModalActualizarFuncion(evento)}
            actualizarListaEventos={peticionObtenerEventos}
            abrirModalAsistentes={() => abrirModalAsistentes(evento.id)}
          />
        ))}
      </div>

      {abrirModal && (
        <Formulario
          abrirModal={abrirModal}
          setAbrirModal={setAbrirModal}
          setNombre={setNombre}
          setDescripcion={setDescripcion}
          setFechaInicio={setFechaInicio}
          setFechaFin={setFechaFin}
          setCapacidadMaxima={setCapacidadMaxima}
          setUbicacion={setUbicacion}
          crearEventoFuncion={crearEventoFuncion}
          editarEventoFuncion={editarEventoFuncion}
          modoEdicion={modoEdicion}
          nombre={nombre}
          descripcion={descripcion}
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}
          capacidadMaxima={capacidadMaxima}
          ubicacion={ubicacion}
        />
      )}

      <ModalAsistentes
        asistentes={asistentes!}
        isOpen={isModalAsistentesOpen}
        onClose={() => setIsModalAsistentesOpen(false)}
      />
    </Layout>
  );
};

export default Eventos;
