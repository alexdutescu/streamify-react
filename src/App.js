import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Provider } from 'react-redux';
import { MoviesStore } from './store/MoviesStore';

function App() {
  return (
    <BrowserRouter>
    <Provider store={MoviesStore} >
      <Header />
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace/>}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        <Footer />
        </Provider>
    </BrowserRouter>
  );
}

export default App;
