import React from 'react';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import '../paginas/estilos.css';
import Header from './header';

function PaginaGrados(props) {
    return (
        <div >
            <Header header={props.header}>
                {props.header}
            </Header>
            <div>
                <div className="Horizontal">
                    <div className="Center">

                        <div className="Videos">
                            <Player
                                playsInline
                                src={props.src1}
                            // src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                            />
                        </div>
                        <div className="Videos">
                            <Player
                                playsInline
                                src={props.src2}
                            // src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Vertical">
                <div title={props.text}>
                    <div className="Center">
                        {props.title}
                    </div>
                </div>
                <div className="Center">
                    <img src={props.src3}
                        width={props.width}
                        height={props.height}
                        alt=""
                    />
                </div>
                <div text={props.text}>
                    <div className="Center">
                        {props.text}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PaginaGrados;