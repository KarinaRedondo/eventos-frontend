import { urlApi } from "../../api";
import { Evento } from "../../models/eventos";

export const obtenerEventos = async (): Promise<Evento[]> => {
  const { data } = await urlApi.get("/eventos");
  return data;
};
