import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";
import "../styles/home.scss";
import "../styles/footer.scss";


import banner from "../assets/sean-pollock.jpg"
import React from "react";

export function Home() {
    return (

        <div className="page-principal">
            <header>
                <Header />
            </header>
            <aside>
                <div className="banner-principal">
                    <img src={banner} alt="Banner Predios" />
                </div>


            </aside>

            <main >
                <Section />


            </main>
            <footer>
                <Footer />

            </footer>
        </div>





    )
}