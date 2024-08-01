import { BrowserRouter, Route, Routes } from "react-router-dom";
import IniciarSesion from "./vistas/iniciar-sesion";
import Registrarse from "./vistas/registrarse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/registrarse" element={<Registrarse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
