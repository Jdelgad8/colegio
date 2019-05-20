import React from 'react';
import PaginaGrados from '../comunes/pagina-grados';

function QuintoGrado(props) {
    return (
        <div id="quinto">

            <PaginaGrados
                header="Quinto Grado"
                src1="../../Videos/quintouno.mp4"
                src2="../../Videos/quintodos.mp4"
                src3="../../ImagenesCurso/quintouno.jpg"
                height={640}
                width={453}
                title={

                    <h2> Esto te podría interesar</h2>
                }

            />
        </div>
    );
}

export default QuintoGrado;