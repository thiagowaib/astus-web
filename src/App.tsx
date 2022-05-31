import { BrowserRouter } from 'react-router-dom';

import './reset.scss'
import { AnimatedRoutes } from './components';

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes/>
    </BrowserRouter>
  );
}

export default App;
