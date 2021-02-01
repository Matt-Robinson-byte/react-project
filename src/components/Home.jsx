import Graph from './Graph'
import Picture from './Picture'
import { useEffect } from 'react'
import Map from './Map'

function Home(props) {
  useEffect(()=>{
    props.getRocja()
  },[]) 
    return (
      <div className = 'home'>
        <Graph
            data = {props.data}    
        >
        </Graph>
        <button value="Rio Naranjo"onClick={props.getNaranjo}>Rio Naranjo</button>
          <button value="Rio Rocja Pontila" onClick={props.getRocja} >Rio Rocja Pontila</button>
        <Picture 
            image ={props.data.image}
         />
         M
          
             
              </div>
    );
}
    
    


export default Home;