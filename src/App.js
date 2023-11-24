import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Cursos from './components/Cursos/cursos';
import Intro from './components/Intro/intro';
import Formacoes from './components/formacoes/formacoes';
import Vagas from './components/vagas/vagas';
import VagasFront from './components/vagas/front/vagasFront';
import FrontSingle from './components/vagas/front/frontSingle/frontSingle';

const routes = createBrowserRouter ([
  {
    path: '/',
    element: <Intro/>
  },
  {
    path: '/quero-estudar',
    element: <Cursos/>
  },
  {
    path: '/nossas-formacoes',
    element: <Formacoes/>
  },
  {
    path: '/vagas',
    element: <Vagas/>
  },
  {
    path: '/vagas-front-end',
    element: <VagasFront/>
  },
  {
    path: '/single-job',
    element: <FrontSingle/>
  },

])

function App() {
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App;
