import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SectionAreaAtuacao } from "../components/SectionAreaAtuacao";
import "../styles/global.scss";


export function AreaAtuacao() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <aside>

            </aside>
            <main> <SectionAreaAtuacao /></main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}