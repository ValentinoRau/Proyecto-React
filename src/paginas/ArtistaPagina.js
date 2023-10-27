import React from "react";
import ListaArtistas from "../componentes/ListaArtistas";

export default class ArtistaPagina extends React.Component {

    artistas = [
        {
            nombre: 'The black eyed peas',
            img: '/img/black eyed peas.avif'
        },
        {
            nombre: 'LMFAO',
            img: '/img/LMFAO.jpg'
        },
        {
            nombre: 'NWA',
            img: '/img/NWA.jpg'
        }
    ]

    render(){
        return(
            <>
                <h2> Artistas </h2>
                <ListaArtistas artistas={this.artistas} />
            </>
        )
    }
            
}