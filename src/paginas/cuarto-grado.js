import React from 'react';
import PaginaGrados from '../comunes/pagina-grados';


function CuartoGrado(props) {
    return (
        <div id="cuarto">
            <PaginaGrados
                header="Cuarto Grado"
                src1="../../Videos/videounocuarto.mp4"
                src2="../../Videos/videodoscuarto.mp4"
                src3="../../ImagenesCurso/cuartouno.jpg"
            />
        </div>
    );
}

export default CuartoGrado;