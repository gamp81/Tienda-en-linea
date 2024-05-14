import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import Footer from './layouts/footer'
import Storerouter from './router/Storerouter'

function App() {
  return (
    <div className="App">
        <Storerouter></Storerouter>
        <Footer/>
    </div>
  );
}

export default App;
