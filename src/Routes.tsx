import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from 'react-router-dom';


import { Home } from "./pages/Home";
import { AreaAtuacao } from "./pages/AreaAtuacao";
import { Blog } from "./pages/Blog";
import { Contato } from './pages/Contato';


export function AppRoutes() {
    return (
        <Router>
            <Routes>

                <Route index element={<Home />} />
                <Route path="/areas-de-atuacao" element={<AreaAtuacao />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contato" element={<Contato />} />

            </Routes >
        </Router >
    )
}


