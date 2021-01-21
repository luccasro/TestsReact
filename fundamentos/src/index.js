import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './Components/basicos/Primeiro.jsx'
import ComParametro from './Components/basicos/ComParametro.jsx'
import Fragmento from './Components/basicos/Fragmento.jsx'
import Header from './Components/basicos/Header.jsx'


const el = document.getElementById('root');
ReactDOM.render(
    <div id="app">
        <Header></Header>
    <Primeiro></Primeiro>
    <ComParametro titulo="Segundo Componente" subtitulo="Bem interessante camarada" nota={7}/>
    <Fragmento></Fragmento>
    </div>
    
    , el);