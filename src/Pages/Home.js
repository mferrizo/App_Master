import {Outlet} from "react-router-dom";



function AboutUs() {
    return (
        <div className="aboutUs__container">
                <div className="title"> 
                    <h2> Las Mejores Ofertas</h2>
                      <p> Portal dedicado a la venta online equipamiento Tecnologico. </p>
                    
                </div>
                
            <Outlet />

        </div>
    )
}

export default AboutUs