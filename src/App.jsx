import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SearchPage from './pages/SearchPage';


// function Search(){
//   return (<h1>This is the Search Page</h1>);
// }

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/search' element={<SearchPage/>}>
          </Route> 
          <Route exact path='/' element={<Home/>}>
          </Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
