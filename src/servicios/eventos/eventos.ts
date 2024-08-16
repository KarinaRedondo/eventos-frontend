import { urlApi } from "../../api";
import { Evento } from "../../models/eventos";

export const obtenerEventos = async () => {
  const { data } = await urlApi.get("/eventos");
  return data as Evento[];
};
