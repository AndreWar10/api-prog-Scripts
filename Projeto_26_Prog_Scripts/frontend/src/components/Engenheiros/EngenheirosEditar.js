import React from "react";
import Cabecalho from '../Cabecalho/Cabecalho.js'
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal.js'

import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom'
import api from "../../services/api";

import './EngenheirosEditar.css'

export default function EngenheirosEditar() {
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [apelido, setApelido] = useState('')
    const [telefone, setTelefone] = useState('')
    const [crea, setCrea] = useState('')
    const [formatura, setFormatura] = useState('')
    let [botao, setBotao] = useState(false)


    const { idEngenheiro } = useParams()

    useEffect(() => {
        async function getEngenheiros() {
            console.log('Engenheiro: ' + idEngenheiro)
            if (idEngenheiro == 0) {
                console.log('Inclusão de registro!')
            } else {

                const { data } = await api.get('/engenheiros/' + idEngenheiro)
                console.log("Retorno Editar: " + data)

                setNome(data[0].eng_nome)
                setTelefone(data[0].eng_telefone)
                setApelido(data[0].eng_apelido)
                setCrea(data[0].eng_crea)
                setFormatura(data[0].eng_dtformatura)
                setBotao(false)

            }
        }
        getEngenheiros()

    }, [])

    async function handleEngenheiros(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        console.log("Dados Form: Código: " + data.eng_nome + "-- Nome: " + data)

        try {
            if (nome.length == 0) {
                alert('Nome Vazio!')
            } else {

                if (botao) {
                    await api.delete('/engenheiros/' + idEngenheiro, data)
                    alert('Engenheiro deletado com sucesso!')
                }
                else {
                    if (idEngenheiro == 0) {
                        await api.post('/engenheiros/', data)
                        alert('Engenheiro adicionado com sucesso!')
                    }
                    else {
                        await api.put('/engenheiros/' + idEngenheiro, data)
                        alert('Engenheiro editado com sucesso!')
                    }
                }

                navigate('/engenheiros')
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
                    <form className="form--autor" onSubmit={handleEngenheiros} >

                        <div className="form-row">
                            <div id="div_form" className="col-md-6 offset-md-1">
                                <label>Nome do Engenheiro</label>
                                <input type='text'
                                    className="form-control"
                                    name="eng_nome"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                    maxLength='30'></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-3 offset-md-1">
                                <label>Apelido do Engenheiro</label>
                                <input type='text'
                                    className="form-control"
                                    name="eng_apelido"
                                    value={apelido}
                                    onChange={e => setApelido(e.target.value)}
                                    maxLength='15'></input>
                            </div>
                        </div>

                        {/* Nova linha no formulário - ativo - inativo*/}

                        <div className="form-row">
                            <div className="col-md-3 offset-md-1">
                                <label>Telefone do Engenheiro</label>
                                <input type='text'
                                    className="form-control"
                                    name="eng_telefone"
                                    value={telefone}
                                    onChange={e => setTelefone(e.target.value)}
                                    maxLength='15'>

                                </input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-3 offset-md-1">
                                <label>Número Crea</label>
                                <input type='text'
                                    className="form-control"
                                    name="eng_crea"
                                    value={crea}
                                    onChange={e => setCrea(e.target.value)}
                                    maxLength='6'
                                ></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-3 offset-md-1">
                                <label>Data de Formatura</label>
                                <input type='text'
                                    className="form-control"
                                    name="eng_dtformatura"
                                    value={formatura}
                                    onChange={e => setFormatura(e.target.value)}
                                    maxLength='10'
                                ></input>
                            </div>
                        </div>

                        <div>
                            <button id="btnSalvar" type="onSubmit" className="btn btn-success btn-clock">Salvar</button>
                            <button type="button" id="btnVoltar" onClick={() => navigate('/engenheiros')} className="btn btn-secondary">Voltar</button>
                        </div>
                        <button type="onSubmit" id="btnDelete" value={botao}
                            onClick={() => setBotao(botao = true)} className="btn btn-danger">Excluir Engenheiro</button>
                    </form>
                </section>
            </div>
        </>
    )
}
