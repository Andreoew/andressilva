import React from "react";
import { Link } from "react-router-dom"
import logooo from "../assets/logooo.png";
import "../styles/header.scss"

export function Header() {
    return (
        <div>
            <nav><div id="logo"><img src={logooo} alt="Logo" /></div>
                <ul>
                    <li><Link to="/"><h1>Home</h1></Link></li>
                    <li><Link to="/areas-de-atuacao"><h1>Áreas de Atuação</h1></Link></li>
                    <li><Link to="/blog"><h1>Blog</h1></Link></li>
                    <li><Link to="/contato"><h1>Contato</h1></Link></li>
                </ul>


            </nav>
            <hr></hr>
        </div>
    )
}


