import { urlApi } from "../../api";
import { LoginDto } from "../../models/login";

export const iniciarSesionApi = async (login: LoginDto) =>{
   const {data} = await urlApi.post("/iniciar-sesion", login);
return data;
}