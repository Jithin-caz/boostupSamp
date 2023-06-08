import './App.css';
import Nav from './components/Navbar';
import Tuts from './components/tutorials';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import Login from './components/login';
import About from './components/about';
function App() {
  return (
<Router>
<Nav/>
<Routes>
<Route path='/' element={<Tuts/>}/>
<Route path='/components/about' element={<About/>}/>
<Route path='/' element={<Tuts/>}/>
<Route path='/components/login' element={<Login/>}/>
</Routes>
</Router>
  );
}

export default App;
