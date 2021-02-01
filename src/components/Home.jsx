import Graph from './Graph'




function Home(props) {
    
    return (
      <div>
        
        <Graph
            data = {props.data}
        ></Graph>
         
              <button value="Rio Naranjo"onClick={props.getNaranjo}>Rio Naranjo</button>
              <button value="Rio Rocja Pontila" onClick={props.getRocja} >Rio Rocja Pontila</button>
             
      </div>
    );
}
    
    


export default Home;