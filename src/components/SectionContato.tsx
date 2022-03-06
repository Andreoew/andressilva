import "../styles/sectionContato.scss";
import escritorio from "../assets/escritorio.jpg";
import Form from "./Form";
import React from "react";

export function SectionContato() {

    return (

        <div id="section">
            <aside>
                <div className="container-a">
                    <div className="titulo-contato">
                        <h1>Agradecemos o seu contato</h1><br></br>
                        <></><div>
                            <h2>Estamos prontos para ajudar em suas necessidades jurídicas</h2><br></br>
                        </div>

                    </div>

                    < Form />

                </div>
                <div className="container-b">

                    <div className="escritorio">
                        <img src={escritorio} alt="Escritório" />
                    </div>

                </div>
            </aside>
            {/* <main>

            </main> */}


        </div>


    )
}