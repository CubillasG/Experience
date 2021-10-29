
import './App.css';
import { Grilla } from './Grilla';
import estilo from './App.module.css'


export function App() {

  
  return ( <>
  <header>
    <h1 className={estilo.titulo}>Experience</h1>
    
  </header>
  <main>
    <Grilla  />
  </main>
  </>);
}


