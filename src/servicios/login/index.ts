import { urlApi } from "../../api";

export const iniciarSesionApi = async (correo: string, contraseña: string) => {
  const { data } = await urlApi.post("/iniciar-sesion", { correo, contraseña });
  return data;
};
