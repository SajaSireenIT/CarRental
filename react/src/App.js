import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from './components/Layout';
import Register from './components/Register';
import Login from './components/Login';
import Maruthi from './components/Maruthi';
import Honda from './components/Honda';
import Hyundai from './components/Hyundai';
import Home from './components/Home';
import Payment from './components/Payment';
import Variance from './components/Variance';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />} >
        
        
        <Route path="/Register" element ={<Register />} />
        <Route path="/Maruthi" element ={<Maruthi />} />
        <Route path="/Honda" element ={<Honda />} />
        <Route path="/Hyundai" element ={<Hyundai />} />
        <Route path="/Login" element ={<Login />} />
        <Route path="/Home" element ={<Home />} />
        <Route path="/Variance" element ={<Variance />} />
        
        <Route path="/Payment" element ={<Payment />} />
     

        
        </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
