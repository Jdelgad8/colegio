import React from 'react';
import { render } from 'react-dom';
import PaginaPrincipal from './src/paginas/pagina-principal';
import { BrowserRouter, hashHistory, Route } from 'react-router-dom';
import CuartoGrado from './src/paginas/cuarto-grado';
import QuintoGrado from './src/paginas/quinto-grado';
import SextoGrado from './src/paginas/sexto-grado';
import SeptimoGrado from './src/paginas/septimo-grado';
import OctavoGrado from './src/paginas/octavo-grado';
import NovenoGrado from './src/paginas/noveno-grado';



const index = document.getElementById('index');

//ReactDOM.render(que voy a renderizar, donde lo haré);
//const holaMundo = <h1>hola mundo!</h1>;
render((
    <BrowserRouter history={hashHistory}>
        <div>
            <Route path="/" component={PaginaPrincipal} exact />
            {/* <Route path="/" component={PapaginaGrados} /> */}
            <Route path="/cuarto-grado" component={CuartoGrado} />
            <Route path="/quinto-grado" component={QuintoGrado} />
            <Route path="/sexto-grado" component={SextoGrado} />
            <Route path="/septimo-grado" component={SeptimoGrado} />
            <Route path="/octavo-grado" component={OctavoGrado} />
            <Route path="/noveno-grado" component={NovenoGrado} />
        </div>
    </BrowserRouter>
), index);