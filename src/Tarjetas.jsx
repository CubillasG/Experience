import estilo from './Estilo.module.css'

export function Tarjetas ({dato}){
  
  
    return <li className={estilo.tarjetas}>
        <img width={250} height={410} className={estilo.Imagenes} src={dato.url_original} alt={dato.name} />
        
           <div>{dato.name}</div> 
        </li>
        
    
}