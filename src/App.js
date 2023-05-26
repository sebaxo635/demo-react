import './App.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Formulario from './page/formulario';
import Home from './page/Home';
import Sesion from './page/Sesion';
import Grafico from './page/Grafico';
import Registros from './page/Registros';
import Informe from './page/Informe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Formulario",
    element: <Formulario/>
  },
  {
    path: "/Sesion",
    element: <Sesion/>
  },
  {
    path: "/Grafico",
    element: <Grafico/>
  },
  {
    path: "/Registros",
    element: <Registros/>
  },
  {
    path: "/Registros/:id",
    element: <Informe/>
  },

])


function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router}/> 

    </div>
  );
}

export default App;
