import React from "react";
import Geral from "./components/Geral/Geral.js"
import Engenheiros from "./components/Engenheiros/Engenheiros.js";
import EngenheirosEditar from "./components/Engenheiros/EngenheirosEditar.js";
import Obras from "./components/Obras/Obras.js";
import ObrasEditar from "./components/Obras/ObrasEditar.js";

import { Route, Routes } from 'react-router-dom'

function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Geral />} />
            <Route exact path="/engenheiros" element={<Engenheiros />} />
            <Route exact path="/engenheiros/:idEngenheiro" element={<EngenheirosEditar />} />

            <Route exact path="/obras" element={<Obras />} />
            <Route exact path="/obras/:idObra" element={<ObrasEditar />} />
        </Routes>
    )
}


export default Routers

