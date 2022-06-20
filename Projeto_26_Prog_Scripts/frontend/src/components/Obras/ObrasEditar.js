import React from "react";
import Cabecalho from '../Cabecalho/Cabecalho.js'
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal.js'
import api from '../../services/api.js'

import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'


import './ObrasEditar.css'

export default function ObrasEditar() {
    const navigate = useNavigate()

    const [cidade, setCidade] = useState('')
    const [tipo, setTipo] = useState('')
    const [valor, setValor] = useState('')
    const [inicioobra, setInicioobra] = useState('')
    const [engenheiro, setEngenheiro] = useState('')
    let [botao, setBotao] = useState(false)

    const { idObra } = useParams()

    useEffect(() => {
        async function getObras() {
            console.log('Obra: ' + idObra)
            if (idObra == 0) {
                console.log('Inclusão de registro!')
            } else {
                const { data } = await api.get('/obras/' + idObra)
                console.log("Retorno Editar: " + data)

                setCidade(data[0].obr_cidade)
                setValor(data[0].obr_valor)
                setTipo(data[0].obr_tipo)
                setInicioobra(data[0].obr_inicioobra)
                setEngenheiro(data[0].eng_codigo)
                setBotao(false)
            }
        }
        getObras()

    }, [])

    async function handleObras(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        //console.log("Dados Form: Código: " + data.obr_cidade + "-- Nome: " + data)
        try {
            if (cidade.length == 0) {
                alert('Nome Vazio!')
            } else {

                if (botao) {
                    await api.delete('/obras/' + idObra, data)
                    alert('Obra deletada com sucesso!')
                }
                else {
                    if (idObra == 0) {
                        await api.post('/obras/', data)
                        alert('Obra criada com sucesso!')

                    }
                    else {
                        await api.put('/obras/' + idObra, data)
                        alert('Obra editada com sucesso!')

                    }
                }

                navigate('/obras')
            }

        }
        catch (error) {
            alert('Erro ao gravar...verifique!')
        }
    }

    return (
        <>
            <Cabecalho />
            <MenuHorizontal />

            <div>
                <section className="sectionTable">
                    <form className="form--obror" onSubmit={handleObras} >

                        <div className="form-row">
                            <div className="col-md-3 offset-md-1">
                                <label>Cidade da Obra</label>
                                <input type='text'
                                    className="form-control"
                                    name="obr_cidade"
                                    value={cidade}
                                    onChange={e => setCidade(e.target.value)}
                                    maxLength='20'></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-3 offset-md-1">
                                <label>Tipo da Obra</label>
                                <input type='text'
                                    className="form-control"
                                    name="obr_tipo"
                                    value={tipo}
                                    onChange={e => setTipo(e.target.value)}
                                    maxLength='10'></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-1 offset-md-1">
                                <label>Valor</label>
                                <input type='text'
                                    className="form-control"
                                    name="obr_valor"
                                    value={valor}
                                    onChange={e => setValor(e.target.value)} maxLength='20'>

                                </input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-1 offset-md-1">
                                <label>Inicio da obra</label>
                                <input type='text'
                                    className="form-control"
                                    name="obr_inicioobra"
                                    value={inicioobra}
                                    onChange={e => setInicioobra(e.target.value)}
                                    maxLength='20'
                                ></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-1 offset-md-1">
                                <label>Engenheiro</label>
                                <input type='text'
                                    className="form-control"
                                    name="eng_codigo"
                                    value={engenheiro}
                                    onChange={e => setEngenheiro(e.target.value)}
                                    maxLength='10'
                                ></input>
                            </div>
                        </div>

                        <div>
                            <button id="btnSalvar" type="onSubmit" className="btn btn-success btn-clock">Salvar</button>

                            <button type="button" id="btnVoltar" onClick={() => navigate('/obras')} className="btn btn-secondary">Voltar</button>

                        </div>
                        <button type="onSubmit" id="btnDelete" value={botao}
                            onClick={() => setBotao(botao = true)} className="btn btn-danger">Excluir</button>
                    </form>
                </section>
            </div>
        </>
    )
}
