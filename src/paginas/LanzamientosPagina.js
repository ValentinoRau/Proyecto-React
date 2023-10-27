import React from "react";

export default class LanzamientosPagina extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lanzamientos: []
        };
    }

    componentDidMount() {
        fetch("https://musicbrainz.org/ws/2/release?artist=ed5d9086-e8cd-473a-b96c-d81ad6c98f0d&inc=recordings&fmt=json")
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            if (result.releases) {
                this.setState({
                    lanzamientos: result.releases
                });
            }
        });
    }

    render() {
        return (
            <>
                {this.state.lanzamientos.map((lanzamiento) => (
                    <p key={lanzamiento.id}>{lanzamiento.title} ({lanzamiento.date})</p>
                ))}
            </>
        );
    }
}