import React from 'react';

import { useEffect, useState } from 'react';

import api from '../../services/api.js'
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal.js'
import Cabecalho from '../Cabecalho/Cabecalho.js'

import './Engenheiros.css'

function Engenheiros() {
    const [engenheiros, setEngenheiros] = useState([])

    useEffect(() => {
        api.get('engenheiros')
            .then(response => setEngenheiros(response.data))

    }, []
    )


    return (
        <>
        <Cabecalho />
        <MenuHorizontal />
            <legend id='legenda'>  Registros de Engenheiros</legend>
            <table border="1" className='table table-responsive'>
                <thead>
                    <tr id='titulo'>
                        <th id="t_codigo">Cod</th>
                        <th id="t_nome">Nome do Engenheiro</th>
                        <th id="t_apelido">Apelido</th>
                        <th id="t_telefone">Telefone</th>
                        <th id="t_crea">CREA</th>
                        <th id="t_dtformatura">Formatura</th>
                        <th id="novo" scope='col'><a href={'/engenheiros/0'}
                            className='btn btn-success btn-block'>Novo Engenheiro</a></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody className='tabela'>
                    {engenheiros.map((item, i) => {
                        return (
                            <>
                                <tr>
                                    <td id="p_codigo">{item.eng_codigo}</td>
                                    <td id="p_nome">{item.eng_nome}</td>
                                    <td id="p_apelido">{item.eng_apelido}</td>
                                    <td id="p_telefone">{item.eng_telefone}</td>
                                    <td id="p_crea">{item.eng_crea}</td>
                                    <td id="p_dtformatura">{item.eng_dtformatura}</td>
                                    <td id="editar"> <a className='btn btn-primary btn-block' href={'/engenheiros/' + item.eng_codigo} >Visualizar</a></td>
                                    <td></td>
                                </tr>
                            </>
                        )

                    })}
                </tbody>
                <tfoot>
                    <tr id="registros">
                        <td>Total de Registros: {engenheiros.length}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default Engenheiros

