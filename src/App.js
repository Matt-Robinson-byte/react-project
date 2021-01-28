import Home from './components/Home';
import Stuff from './components/Stuff';
import About from './components/About';

import { 
  Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Home />
      <Stuff />
      <About />

    </div>
  );
}

export default App;
