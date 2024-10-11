import { urlApi } from "../../api";
import { crearEventoDto, Evento } from "../../models/eventos";

export const obtenerEventos = async (): Promise<Evento[]> => {
  const { data } = await urlApi.get("/eventos");
  return data;
};

export const crearEvento = async (info: crearEventoDto) => {
  const { data } = await urlApi.post("/eventos", info);
  return data;
}; 

export const eliminarEvento = async (id: string) => {
  const { data } = await urlApi.delete(`/eventos/${id}`);
  return data;
}