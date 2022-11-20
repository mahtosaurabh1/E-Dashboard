
import './App.css';
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Register from './components/signup';
import Login from './components/login';
import PrivateComponent from './components/privateComponent';
import Feed from './components/feed';
import Navbar from './components/navbar';
import Footer from './components/footer';


function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route element={<PrivateComponent/>}>
      <Route path='/feed' element={<Feed/>}/>
      </Route>

      <Route path='/signup' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
    <Footer/>
   </Router>
   </>
    );
}

export default App;
