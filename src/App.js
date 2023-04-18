import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Cursos from './components/Cursos/cursos';
import Intro from './components/Intro/intro';
import Formacoes from './components/formacoes/formacoes';

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
  }
])

function App() {
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App;
