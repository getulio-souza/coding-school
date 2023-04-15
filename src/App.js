import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Cursos from './components/Cursos/cursos';
import Intro from './components/Intro/intro';

const routes = createBrowserRouter ([
  {
    path: '/',
    element: <Intro/>
  },
  {
    path: '/quero-estudar',
    element: <Cursos/>
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
