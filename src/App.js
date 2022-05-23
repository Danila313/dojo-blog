import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Assicura che venga visualizzata una sola route alla volta */}
          <Switch> 
          {/* Creo la route, le assegno un path ovvero dove arrivero' con quella route, 
          aggiungo exact perche' altrimenti guarda top bottom il match per la route e si ferma al primo che trova*/}
            <Route exact path="/">  
            {/* Cosa visualizzo in quella route */}
              <Home />  
            </Route>
            <Route path="/create">  
              <Create />  
            </Route>
            <Route path="/blogs/:id">  
              <BlogDetails />  
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
