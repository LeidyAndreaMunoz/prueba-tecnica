import './App.css';
import {Route, Routes} from 'react-router-dom'

import Home from './components/pages/home/Home';
import Detail from './components/pages/detail/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id/:img' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
