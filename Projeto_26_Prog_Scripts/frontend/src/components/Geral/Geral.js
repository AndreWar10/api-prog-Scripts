import React from 'react';
import Cabecalho from '../Cabecalho/Cabecalho.js';
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal.js';
import AreaDados from '../AreaDados/AreaDados.js';
import Rodape from '../Rodape/Rodape.js';

import './Geral.css'

function Geral() {
    return (
        <div className='geral'>
            <Cabecalho />
            <MenuHorizontal />
            <AreaDados />
            <Rodape />
        </div>
    )
}

export default Geral

