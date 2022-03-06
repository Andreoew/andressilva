import "../styles/section.scss";
import escritorio from "../assets/escritorio.jpg";
import Eumesmo from "../assets/Eumesmo.png";

import { Link } from "react-router-dom"
import React from "react";



export function Section() {

    return (

        <div id="section">
            <aside>
                <div className="container-a">
                    {/* <h2>display: inline-block</h2> */}

                    <div className="escritorio">
                        <img src={escritorio} alt="Escritório" />
                    </div>
                </div>
                <div className="container-b">
                    <h2>Advocacia Tailor-Made</h2><br></br>
                    <p>O ADSS é um escritório de advocacia fundado a partir da experientes  do advogado <strong>André de Souza Silva</strong>, visando atender as necessidades do mercado por serviços jurídicos técnicos e altamente personalizados.</p><br></br>
                    <p>Ao longo de sua trajetória o escritório vêm representando diversas empresas do segmento da construção e engenharia civil, produtores rurais, prestadores de serviços de diversas naturezas, condomínios e associações civis em inúmeras prevenções de litígios, disputas complexas e reestruturação de dívidas, sempre pautando a entrega dos serviços em patamar mais elevado do que o esperado pelos clientes.</p> <br></br>
                    <p>Paralelamente, dada a personalização e alta especialização dos serviços entregues, o escritório também vem se destacando na representação de conglomerados familiares, atuando de forma preventiva na estruturação de novos negócios, incluindo-se planejamento sucessórios e familiares, sempre buscando uma atuação conjunta e aproximada perante os seus clientes.</p><br></br>
                    <p>A atuação do <strong>ADSS</strong> é sempre pautada no conhecimento profundo do dia a dia de seus clientes, a fim de que as soluções apresentadas sejam mais do que simples pareceres e opiniões jurídicas, mas também soluções empresariais focadas na otimização de recursos e ativos de seus clientes.</p>


                </div>
            </aside>
            <main>
                <h3>Experiência e Referências</h3>
                <h4>Conheça o perfil dos profissionais do escritório</h4>
                <div className="advogados">
                    <Link to="/equipe"> <img src={Eumesmo} alt="Advogado" /></Link>



                </div>
                <strong>André de Souza Silva</strong>
                <p>Sócio fundador</p>

            </main>


        </div>


    )
}