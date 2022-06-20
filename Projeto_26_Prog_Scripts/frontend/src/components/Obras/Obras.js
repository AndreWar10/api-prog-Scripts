import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../services/api.js'
import Cabecalho from '../Cabecalho/Cabecalho.js'
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal.js'
import './Obras.css'

function Obras() {
    const [obras, setObras] = useState([])

    useEffect(() => {
        api.get('obras')
            .then(response => setObras(response.data))

    }, []
    )

    return (
        <>
            <Cabecalho />
            <MenuHorizontal />
            <legend id='legenda'>  Registros de Obras</legend>
            <table border="1" className='table table-responsive'>
                <thead>
                    <tr id='titulo'>
                        <th id="t_codigo">Cod Obra</th>
                        <th id="t_cidade">Cidade</th>
                        <th id="t_tipo">Tipo</th>
                        <th id="t_valor">Valor</th>
                        <th id="t_inicioobra">Início</th>
                        <th id="engCodigo">Cod Engenheiro</th>
                        <th id="nome">Nome Engenheiro</th>
                        <th id="telefone">Telefone</th>
                        <th id="crea">Crea </th>
                        <th id="novo" scope='col'><a href={'/obras/0'}
                            className='btn btn-success btn-block'>Nova obra</a></th>

                    </tr>
                </thead>

                <tbody className='tabela'>
                    {obras.map((item, i) => {
                        return (
                            <>
                                <tr>
                                    <td id="p_codigo">{item.obr_codigo}</td>
                                    <td id="p_cidade">{item.obr_cidade}</td>
                                    <td id="p_tipo">{item.obr_tipo}</td>
                                    <td id="p_valor">{item.obr_valor}</td>
                                    <td id="p_inicioobra">{item.obr_inicioobra}</td>
                                    <td id="p_engCodigo">{item.eng_codigo}</td>
                                    <td id="p_nome">{item.eng_nome}</td>
                                    <td id="p_telefone">{item.eng_telefone}</td>
                                    <td id="p_crea">{item.eng_crea}</td>


                                    <td id="editar"> <a className='btn btn-primary btn-block' href={'/obras/' + item.obr_codigo} >Visualizar</a></td>


                                </tr>
                            </>
                        )

                    })}
                </tbody>

                <tfoot>
                    <tr id="registros">
                        <td >Total de Registros: {obras.length}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default Obras

