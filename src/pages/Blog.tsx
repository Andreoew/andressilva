import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SectionBlog } from "../components/SectionBlog";
import "../styles/section.scss";
import "../styles/global.scss";
import React from "react";



export function Blog() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <aside>


            </aside>
            <main>
                <SectionBlog />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}