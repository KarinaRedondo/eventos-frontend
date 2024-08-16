import { useEffect, useState } from "react";
import Layout from "../../Componentes/Layout";
import { Evento } from "../../models/eventos";
import { obtenerEventos } from "../../servicios/eventos/eventos";

const Eventos = () => {
  const [eventos, setEventos] = useState<any>();
  const peticionObtenerEventos = () => {
    const listaDeEventos = obtenerEventos();
    setEventos(listaDeEventos);
  };
  useEffect(() => {
    peticionObtenerEventos();
  }, []);
  console.log (eventos)
  return (
    <Layout>
      <h1>vistasDeEventos</h1>
    </Layout>
  );
};

export default Eventos;
