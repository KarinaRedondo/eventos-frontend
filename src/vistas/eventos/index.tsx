import { useEffect, useState } from "react";
import Layout from "../../Componentes/Layout";
import { obtenerEventos } from "../../servicios/eventos/eventos";
import { Evento } from "../../models/eventos";
import styles from "./Eventos.module.css";

const Eventos = () => {
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
      <div className={styles.contenedor_tarjetas_eventos}>
        {eventos?.map((evento: Evento) => (
          <div className={styles.tarjeta_evento}>
            <h2 className={styles.nombre_evento}>{evento.nombre}</h2>

            <div className={styles.contenedor_items}>
              <div className={styles.item_tarjeta}>
                <span>Descripcion:</span>
                <p>{evento.descripcion}</p>
              </div>

              <div className={styles.item_tarjeta}>
                <span>Ubicacion:</span>
                <p>{evento.ubicacion}</p>
              </div>

              <div className={styles.item_tarjeta}>
                <span>Cupo Maximo:</span>
                <p>{evento.capacidadMaxima}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
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
