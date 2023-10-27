import React from "react";
import Artista from '../componentes/Artista'
export default class InicioPagina extends React.Component {

    render(){
        return(
            <>
                <h2>Inicio</h2>
                
                <p>Bienvenido a mi página de artistas favoritos :D aquí almacenaré todos los artistas que más me gustan para nunca olvidarlos</p>

            
                <Artista 
                nombre="NWA" 
                img="/img/NWA.jpg"
                descripcion="N.W.A., fue un grupo estadounidense de hip hop de Compton, California, y está considerado de modo generalizado como el grupo pionero en la formación del subgénero musical gangsta rap.​" />
    
            </>
        )
    }
            
}