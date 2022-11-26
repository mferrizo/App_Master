import React, {Fragment} from "react";

function Saludo(props) {
    console.log(props)
    return (
        <Fragment>
            <h2>Que desea {props.persona} {props.apellido} el dia de hoy? </h2>
        </Fragment>
    )

}

export default Saludo
