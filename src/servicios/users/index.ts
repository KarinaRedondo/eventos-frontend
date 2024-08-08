import { urlApi } from "../../api";
import { crearUsuarioDto } from "../../models/user";

export const registrarUsuarioApi = async (user: crearUsuarioDto) => {
  const { data } = await urlApi.post("/crear-usuario", user);
  return data;
};