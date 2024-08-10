import { urlApi } from "../../api";

export const iniciarSesionApi = async (login: {
  correo: string;
  contraseña: string;
}) => {
  const { data } = await urlApi.post("/iniciar-sesion", login);
  localStorage.setItem("Usuario", JSON.stringify(data));
  return data;
};
