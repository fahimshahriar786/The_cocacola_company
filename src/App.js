
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home'
import Revews from './Component/Revews/Revews'
import Header from './Component/Header/Header'
import Dashbord from './Component/Dashbord/Dashbord'
import Blogs from './Component/Blogs/Blogs'
import About from './Component/About/About'
function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/revews' element= {<Revews></Revews>} />
        
        <Route path='/dashbord' element= {<Dashbord></Dashbord>} />
        <Route path='/blogs' element= {<Blogs></Blogs>} />
        <Route path='/about' element= {<About></About>} />
        
      </Routes>
    </div>
  );
}

export default App;
