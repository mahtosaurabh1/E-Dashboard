
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import AddProduct from './components/addproduct';
import Updateproduct from './components/updateproduct';
import Profile from './components/profile';
import Logout from './components/logout';
import Signup from './components/signup';
import PrivateComponent from './components/privateComponent';
import Login from './components/login';
import Product from './components/product';
import Footer from './components/footer';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>

        <Route element={<PrivateComponent/>}>
      <Route path='/add-product'element={<AddProduct/>}/>
      <Route path='/updateproduct/:id'element={<Updateproduct/>}/>
      <Route path='/profile'element={<Profile/>}/>
      <Route path='/logout'element={<Logout/>}/>
      <Route path='/' element={<Product/>} />
      </Route>

      <Route path='/signup'element={<Signup/>}/>
      <Route path='/login' element={<Login/>} />
        

      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
