import { useState } from "react";
import { registrarUsuarioApi } from "../../servicios/users";

const useRegistrar = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contraseña, setContraseña] = useState("");

  // Estado para manejar el estado de carga y errores
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Función para crear un nuevo usuario
  const crearUsuarioPeticion = async () => {
    setIsLoading(true); // Indicar que la petición está en curso
    setError(null); // Limpiar errores previos
    try {
      await registrarUsuarioApi({
        nombre,
        apellido,
        correo: correoElectronico,
        contraseña,
        rol: "organizador",
      });
      // Aquí podrías manejar el éxito (por ejemplo, mostrar un mensaje)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Error al registrar el usuario");
      } else {
        setError("Error desconocido");
      }
    } finally {
      setIsLoading(false); // Indicar que la petición ha terminado
    }
  };

  // Retornar los estados y la función para el componente que use el hook
  return {
    nombre,
    setNombre,
    apellido,
    setApellido,
    correoElectronico,
    setCorreoElectronico,
    contraseña,
    setContraseña,
    isLoading,
    error,
    crearUsuarioPeticion,
  };
};

export default useRegistrar;
