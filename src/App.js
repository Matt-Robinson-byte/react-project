import Home from './components/Home';
import Picture from './components/Picture';
import Map from './components/Map'

import axios from 'axios'
import {useState, useEffect} from 'react'
import { 
  BrowserRouter as Router, 
  Link,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  const [data,setData] = useState({results: []})
  const [river, setRiver] = useState([])
  
  
  async function getRocja(){
    const resp = await axios.get(`/api/rocja`);
    // console.log(resp)
    setData(resp.data)
  }
  async function getNaranjo(){
    const resp = await axios.get(`/api/naranjo`);
    //console.log(resp)
    setData(resp.data)
  }
 
  

  return (
    <Router>
    <div className="container">
      <header>
     
      </header>
      <div >
        <Switch>

          <Route path="/" exact>
           
            <Home 
            data = {data}
            getRocja = {getRocja}
            getNaranjo = {getNaranjo}
            />
           <Map></Map>
          </Route>
          <Route path="/stuff" exact>
            
          </Route>
         

        </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
