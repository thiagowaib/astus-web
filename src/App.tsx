import { SignUp, SignIn } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './reset.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
