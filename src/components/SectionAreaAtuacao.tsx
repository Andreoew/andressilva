import escritorio from "../assets/escritorio.jpg";

import "../styles/areaAtuacao.scss";

import { css, styled } from '@stitches/react';

import * as Accordion from '@radix-ui/react-accordion';
import React from "react";

const custon = css({
    '@media (max-width:500px)': {
        width: 600,
    }
});


const StyledAccordion = styled(Accordion.Root, {
    marginTop: 45,

    // height: 50,

});

const StyledItem = styled(Accordion.Item, {
    color: 'black',

});

const StyledHeader = styled(Accordion.Header, {});



const StyledTrigger = styled(Accordion.Trigger, {


    height: 50,
    '@import': 'custon',
    borderRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: 'black',
    background: 'transparent',
    border: '1px solid',
    margin: 2,
    cursor: 'pointer',



});

const StyledPanel = styled(Accordion.Content, {
    width: 600,
    background: '#f9f9fb13',
    color: '#171718',
    textAlign: 'justify',
    lineHeight: 1.6,
    marginLeft: 25,
    padding: 15,
    border: '1px solid',
    marginTop: 0,

});




export function SectionAreaAtuacao() {

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
                    <h2>Serviços Jurídicos Personalizados</h2><br></br>
                    <p>O escritório é pautado no atendimento personalizado
                        oferecendo soluções criativas às demandas de nossos
                        clientes garantindo segurança as suas atividades.</p>



                    <StyledAccordion type="single" collapsible>

                        <StyledItem value="item-1">

                            <StyledHeader>

                                <StyledTrigger>Tributário, Planejamento Patrimonial da Família</StyledTrigger>

                            </StyledHeader>

                            <StyledPanel>Planejar o patrimônio compreende a organização, proteção e consequente sucessão dentro da família.

                                Diversos instrumentos podem ser utilizados em conjunto ou separadamente a depender da intenção da família, bem como de acordo com seu arranjo familiar e patrimonial, para simplificar a sucessão, facilitar a governança corporativa, alcançar eficiência tributária e garantir a perpetuidade através da mitigação ou prevenção de disputas.

                                Encontre aqui a assessoria patrimonial sob medida para pessoas, famílias e empresas.</StyledPanel>

                        </StyledItem>
                        <StyledItem value="item-2">

                            <StyledHeader>

                                <StyledTrigger>Arbitragem, Dispute Board e Mediação</StyledTrigger>

                            </StyledHeader>

                            <StyledPanel> Assessoria em celebração de convenções de arbitragem, cláusulas compromissórias e compromissos arbitrais;

                                Assessoria em procedimentos arbitrais;

                                Análise de convenções arbitrais, bem como consultoria em cláusulas compromissórias cheias e vazias;

                                Atuação como juiz arbitral e dispute board;

                                Ajuizamento de ação de execução específica em cláusulas compromissórias vazias, tutelas de urgência e demais medidas de apoio no Judiciário;

                                Execução de sentenças arbitrais;

                                Representação do interesse de clientes em processos de homologação de sentenças arbitrais estrangeiras, bem como na sua execução perante os Tribunais Brasileiros;

                                Dispute board – Implantação de dispute board e CRC (Comitê de Resolução de Conflitos) em contratos, em todas as suas modalidades (Dispute Review Board – DRB; Dispute Adjudication Board – DAB e Combined Dispute Board – CDB);

                                Realização e assessoria em mediações nos mais diversas espécies de litígios, com a escolha adequada do método autocompositivo;

                                Realização de mediações nas diversas áreas possíveis, tanto na esfera judicial, como extrajudicial.</StyledPanel>

                        </StyledItem>
                        <StyledItem value="item-3">

                            <StyledHeader>

                                <StyledTrigger>Consultoria Imobiliária</StyledTrigger>

                            </StyledHeader>

                            <StyledPanel>Regularização de imóveis;

                                Análise de riscos para realização de negócios imobiliários (due diligence);

                                Locação residencial, não residencial, shopping center e built to suit;

                                Usucapião judicial e extrajudicial;

                                Contratos de compra e venda, promessa de compra e venda e comodato;

                                Contratos de construção e desenvolvimento de novos empreendimentos imobiliários, incorporações e patrimônio de afetação;

                                Ações possessórias e locatícias;

                                Assessoria integral a Condomínios;

                                Implantação e Consultoria sobre LGPD.</StyledPanel>

                        </StyledItem>
                        <StyledItem value="item-4">

                            <StyledHeader>

                                <StyledTrigger>Contencioso Judicial Empresarial</StyledTrigger>

                            </StyledHeader>

                            <StyledPanel>Atuação em litígios cíveis e empresariais, com ênfase em disputas contratuais, licitatórias, empresariais, bancárias e responsabilidade civil (contratual e extracontratual);

                                Ajuizamento de ações e elaboração de defesas nas mais variadas ações cíveis e empresariais;

                                Patrocínio de ações na competência originária dos Tribunais Estaduais e Regionais Federais, bem como em Tribunais Superiores e no STF, como reclamações constitucionais, mandado de segurança, ações rescisórias;

                                Interposição dos mais variados recursos, bem como recursos ao STJ e ao STF;

                                Defesas em ações coletivas, como ações civis públicas e ações de improbidade administrativa;

                                Realização de sustentação oral;

                                Due diligence de potenciais parceiros comerciais para apuração do status litigioso da empresa;

                                Claims watch.</StyledPanel>

                        </StyledItem>
                        <StyledItem value="item-5">

                            <StyledHeader>

                                <StyledTrigger>Reestruturação de Dívidas e Falência</StyledTrigger>

                            </StyledHeader>

                            <StyledPanel>Consultoria a devedores, credores e investidores interessados em processos falimentares ou recuperacionais;

                                Representação dos interesses de devedores na propositura de pedidos de recuperação judicial e extrajudicial, bem como na negociação e estruturação de planos de recuperação judicial e extrajudicial;

                                Representação ativa de credores de empresas em recuperação judicial nos processos de reestruturação, especialmente como foco na fiscalização das atividades dos devedores, mediante análise técnica de balanços e relatórios financeiros, bem como na negociação dos planos de recuperação judicial;

                                Assistência a investidores na aquisição de ativos de empresas falidas ou em recuperação judicial;

                                Estruturação de operações empresariais com o objetivo de resguardar o interesse do cliente quanto ao recebimento de créditos de empresas em recuperação judicial.</StyledPanel>

                        </StyledItem>





                    </StyledAccordion>

                </div>
            </aside>
            {/* <main>
                <h4></h4>
                <img src={Eumesmo} alt="Advogado" /> 
            </main>*/}

        </div>


    )
}