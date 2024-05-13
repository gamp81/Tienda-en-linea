import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import Mujer from './components/mujer';
import Hombre from './components/hombre';
import Home from './components/home';
import Electronica from './components/electronica';
import Register from './components/register';
import Login from './components/login'
import NavBarExample from './layouts/navbar';
import SelectProduct from './components/selectProduct';
import SearchComponent from './components/search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBarExample /> }>
            <Route index element={ <Home /> } />
            <Route path='hombre' element={ <Hombre /> } />
            <Route path='mujer' element={ <Mujer /> } />
            <Route path='electronica' element={ <Electronica /> } />
            <Route path='register' element={ <Register /> } />
            <Route path='login' element={ <Login /> } />
            <Route path='usuarios' element={ <SearchComponent /> } />
            <Route path='/product/:id' element={ <SelectProduct /> } />
            <Route path='*' element={ <Navigate replace to="/"/> }/>
          </Route>
      </Routes> 
     </BrowserRouter>

    </div>
  );
}

export default App;
