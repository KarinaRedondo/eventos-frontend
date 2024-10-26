import { urlApi } from "../../api";
import { Asistente, crearAsistenteDto } from "../../models/asistentes";

export const obtenerAsistentes = async (): Promise<Asistente[]> => {
  const { data } = await urlApi.get("/asistentes");
  return data;
};

export const crearAsistente = async (
  info: crearAsistenteDto
): Promise<Asistente> => {
  const { data } = await urlApi.post("/asistentes", info);
  return data;
};
