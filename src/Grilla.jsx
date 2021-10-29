import { useEffect, useState } from "react"
import { Tarjetas } from "./Tarjetas";
import estilo from './Grilla.module.css'

export function Grilla(){
 
const [datos, setDatos] = useState([]);

useEffect(()=>{
    obtenerDatos()
}, [])

const obtenerDatos = async()=>{
   const res=  await fetch('https://dev-cognitive-dashboard-server.herokuapp.com/techtest')
   const usuarios = await res.json()
   setDatos(usuarios)
}
   
    return(
       <ul className={estilo.grilla}>
            
                {
                    datos.map(dato =>(
                      < Tarjetas key={dato.id}  dato={dato}/>
                    ))
                }
           
       </ul>
    )
}