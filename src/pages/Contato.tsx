import { Header } from "../components/Header";
import { SectionContato } from "../components/SectionContato"
import { Footer } from "../components/Footer";
import "../styles/global.scss";
import React from "react";
export function Contato() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <aside>
                {/* <h1>CONTATO</h1> */}
            </aside>
            <main>
                < SectionContato />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}