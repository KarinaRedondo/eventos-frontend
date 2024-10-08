import { useEffect, useState } from "react";
import Layout from "../../Componentes/Layout";
import { obtenerEventos } from "../../servicios/eventos/eventos";
import { Evento } from "../../models/eventos";
import styles from "./Eventos.module.css";
import TarjetaEvento from "../../Componentes/TarjetaEvento";
import { ModalComponente } from "../../Componentes/Modal";
import { Search } from "react-feather";

const Eventos = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [capacidadMaxima, setCapacidadMaxima] = useState(0);
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [organizador, setOrganizador] = useState("");

  const [abrirModal, setAbrirModal] = useState(false);

  const abrirModalFuncion = () => {
    setAbrirModal(true);
  };

  const [eventos, setEventos] = useState<Evento[]>();

  const peticionObtenerEventos = async () => {
    const listaDeEventos = await obtenerEventos();
    setEventos(listaDeEventos);
  };

  useEffect(() => {
    peticionObtenerEventos();
  }, []);

  console.log(eventos);

  return (
    <Layout>
      <div className={styles.header_eventos}>
        <h1>Eventos</h1>
        <h4>Dashboard/eventos</h4>
      </div>
      <div>
        <input type="Search" placeholder="Buscar eventos" />
        <button onClick={abrirModalFuncion}>Crear un evento</button>
      </div>

      <div className={styles.contenedor_tarjetas_eventos}>
        {eventos?.map((evento: Evento) => (
          <TarjetaEvento
            nombre={evento.nombre}
            descripcion={evento.descripcion}
            capacidadMaxima={evento.capacidadMaxima}
            ubicacion={evento.ubicacion}
          />
        ))}
      </div>
      <ModalComponente
        openModal={abrirModal}
        setOpenModal={setAbrirModal}
        nombreModal="Crear evento"
      >
        <form action="">
          <div className={styles.InputFormulario}>
            <label>Nombre del evento:</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre del evento"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className={styles.InputFormulario}>
            <label>Descripción del evento:</label>
            <textarea
              name="descripcion"
              placeholder="Descripción del evento"
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          <div className={styles.InputFormulario}>
            <label>Capacidad máxima:</label>
            <input
              type="number"
              name="capacidadMaxima"
              placeholder="Capacidad máxima"
              onChange={(e) => setCapacidadMaxima(e.target.valueAsNumber)}
            />
          </div>

          <div className={styles.InputFormulario}>
            <label>Fecha de inicio:</label>
            <input
              type="date"
              name="fechaInicio"
              onChange={(e) => setFechaInicio(e.target.value)}
            />
          </div>

          <div className={styles.InputFormulario}>
            <label>Fecha de fin:</label>
            <input
              type="date"
              name="fechaFin"
              onChange={(e) => setFechaFin(e.target.value)}
            />
          </div>

          <div className={styles.InputFormulario}>
            <label>Ubicación:</label>
            <input
              type="text"
              name="ubicacion"
              placeholder="Ubicación"
              onChange={(e) => setUbicacion(e.target.value)}
            />
          </div>

          <div className={styles.InputFormulario}>
            <label>Organizador:</label>
            <input
              type="text"
              name="organizador"
              placeholder="Organizador"
              onChange={(e) => setOrganizador(e.target.value)}
            />
          </div>
        </form>
      </ModalComponente>
    </Layout>
  );
};

export default Eventos;

// useState -> react
// useNavigate -> react-router-dom
// useEffect -> react

// listaDeProductos es un array de productos [200]
// mostrar los nombres de todos los produtos del array
// .map recorre arrays
// listaDeProductos.map((poducto:Producto) => (
//           <p> {producto.nombre} </p>
//     ) )
