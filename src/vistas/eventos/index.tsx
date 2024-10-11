import { useEffect, useState } from "react";
import Layout from "../../Componentes/Layout";
import { crearEvento, obtenerEventos } from "../../servicios/eventos/eventos";
import { Evento } from "../../models/eventos";
import styles from "./Eventos.module.css";
import TarjetaEvento from "../../Componentes/TarjetaEvento";
import { ModalComponente } from "../../Componentes/Modal";
import { Search } from "react-feather";

const Eventos = () => {
  const usuario = localStorage.getItem("usuarios");
  const user = JSON.parse(usuario!);

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

  const crearEventoFuncion = async () => {
    await crearEvento({
      nombre,
      descripcion,
      fechaInicio,
      fechaFin,
      ubicacion,
      capacidadMaxima,
      organizador: user.id,
      asistentes: [""],
    });
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
      <div className={styles.search_container}>
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
            eventoId={evento.id}
          />
        ))}
      </div>
      <ModalComponente
        openModal={abrirModal}
        setOpenModal={setAbrirModal}
        nombreModal="Crear evento"
      >
        <form
          className={styles.formulario}
          action=""
        
        >
          <div className={styles.inputFormulario}>
            <label>Nombre del evento</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre del evento"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className={styles.inputFormulario}>
            <label>Descripcion</label>
            <input
              type="text"
              name="descripcion"
              placeholder="Ingresa una descripcion"
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          <div className={styles.inputFormulario}>
            <label>Fecha inicio</label>
            <input
              type="Date"
              onChange={(e) => setFechaInicio(e.target.value)}
            />
          </div>

          <div className={styles.inputFormulario}>
            <label>Fecha fin</label>
            <input type="Date" onChange={(e) => setFechaFin(e.target.value)} />
          </div>

          <div className={styles.inputFormulario}>
            <label>Capacidad maxima</label>
            <input
              type="number"
              onChange={(e) => setCapacidadMaxima(e.target.valueAsNumber)}
            />
          </div>

          <div className={styles.inputFormulario}>
            <label>Ubicacion</label>
            <input type="text" onChange={(e) => setUbicacion(e.target.value)} />
          </div>
          <button onClick={ ()=> crearEventoFuncion()}>Crear</button>
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
