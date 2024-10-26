import { urlApi } from "../../api";
import {
  actualizarEventoDto,
  crearEventoDto,
  Evento,
} from "../../models/eventos";

export const obtenerEventos = async (): Promise<Evento[]> => {
  const { data } = await urlApi.get("/eventos");
  return data;
};

export const crearEventoServicio = async (info: crearEventoDto) => {
  const { data } = await urlApi.post("/eventos", info);
  return data;
};

export const eliminarEvento = async (id: string) => {
  const { data } = await urlApi.delete(`/eventos/${id}`);
  return data;
};

export const editarEvento = async (eventoAEditar: actualizarEventoDto) => {
  const { data } = await urlApi.put(`/eventos`, eventoAEditar);
  return data;
};
