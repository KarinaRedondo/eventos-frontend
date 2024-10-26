export interface User {
  id: string;
  nombre: string;
  apellido: string;
  correo: string;
  contraseña: string;
  rol: string;
}

export type crearUsuarioDto = Omit<User, "id">;
export type actualizarUsuarioDto = Partial<User>;
