import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
// import App from './App.tsx'
// import H1 from './Header.tsx'
import ListGroup from './Componenets/ListGroup'
import PieChart from './Componenets/PieChart'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PieChart></PieChart>
  </StrictMode>,
)
