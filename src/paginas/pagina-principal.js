import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './estilos.css';

class PaginaPrincipal extends Component {
    render() {
        return (
            <div className="Horizontal">
                <div className="Side-drawer">
                    <h1 className="white-title">Grados</h1>
                    <Link to="/cuarto-grado">
                        <h2>Cuarto (8-9 Años)</h2>
                    </Link>

                    <Link to="/quinto-grado">
                        <h2>Quinto (9-10 Años)</h2>
                    </Link>

                    <Link to="/sexto-grado">
                        <h2>Sexto (10-11 Años)</h2>
                    </Link>

                    <Link to="/septimo-grado">
                        <h2>Septimo (11-12 Años)</h2>
                    </Link>

                    <Link to="/octavo-grado">
                        <h2>Octavo (12-13 Años)</h2>
                    </Link>

                    <Link to="/noveno-grado">
                        <h2>Noveno (13 - 14 Años)</h2>
                    </Link>

                    <Link to="/cuarto-grado">
                        <h2>Instructivo Padres</h2>
                    </Link>

                </div>
                <div className="Home">

                    <div className="Center">
                        <div className="Vertical">

                            <h1>Colegio Silva Aponte</h1>
                            <img src="./ImagenesCurso/Cuarto.jpg"
                                alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default PaginaPrincipal;