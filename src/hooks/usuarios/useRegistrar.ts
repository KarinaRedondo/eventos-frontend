import { useState } from "react";
import Swal from "sweetalert2";
import { registrarUsuarioApi } from "../../servicios/users";

const useRegistrar = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contraseña, setContraseña] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const crearUsuarioPeticion = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await registrarUsuarioApi({
        nombre,
        apellido,
        correo: correoElectronico,
        contraseña,
        rol: "organizador",
      });

      Swal.fire({
        icon: "success",
        title: "Usuario registrado",
        text: "El usuario ha sido registrado con éxito.",
      });
    } catch (err: unknown) {
      let errorMessage = "Error desconocido";

      if (err instanceof Error) {
        errorMessage = err.message || "Error al registrar el usuario";
      }

      setError(errorMessage);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

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
