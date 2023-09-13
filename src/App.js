
import Register from './Auth/Register';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Auth/Login';

import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
  
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
