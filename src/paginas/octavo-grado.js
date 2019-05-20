import React from 'react';
import PaginaGrados from '../comunes/pagina-grados';

function QuintoGrado(props) {
    return (
        <div id="octavo">

            <PaginaGrados
                header="Octavo Grado"
                src1="../../Videos/quintouno.mp4"
                src2="../../Videos/quintodos.mp4"
                src3="../../ImagenesCurso/quintouno.jpg"
                text={
                    <div>
                        <h3> ALGUNOS CONSEJOS QUE DEBES TENER EN CUENTA</h3>
                        <p>1. No proporcionar nunca datos personales.</p>
                        <p>2. Debes pedir ayuda en caso de ver algo inusual en tu computador, Tablet o celular.</p>
                        <p>3. Aprender a diferenciar entre “amigo” y “contacto de Internet”.</p>
                        <p>4. Limitar el tiempo frente a la pantalla.</p>
                        <p>5. No compartan contraseñas con nadie.</p>
                        <p>6. No publiquen fotografías o videos en Internet sin permiso de sus padres.</p>
                        <p>7. No acepten encontrarse con amigos de Internet a menos que cuenten con el permiso de sus padres.</p>
                        <p>8. No compren nada en Internet sin hablar antes con sus padres.</p>
                        <p>9. No envíen ni respondan a mensajes crueles o insultantes.</p>
                    </div>
                }

            />
        </div>
    );
}

export default QuintoGrado;