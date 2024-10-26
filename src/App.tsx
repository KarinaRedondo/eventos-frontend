import { BrowserRouter, Route, Routes } from "react-router-dom";
import IniciarSesion from "./vistas/iniciar-sesion";
import Registrarse from "./vistas/registrarse";
import Eventos from "./vistas/eventos";
import Asistentes from "./vistas/asistentes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/" element={<Asistentes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;  
