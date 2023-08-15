import { useState } from 'react'

import CardDev from "../../components/CardDev"
import "./style.css"

export default function ListaDevs() {

    // const de armazanamento que armazenamento todos os devs disponiveis
    const [devs, setDevs] = useState<>


    // Fluxo, passe o nome da variavel e depois set+variavel declarada
    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [listaDevsFiltrados, setListaDevsFiltrados] = useState<any[]>(devs);

    function buscarPorSkill(event: any){
        event.preventDefault();
        
        const devsFiltrados = devs.filter((dev: any) => dev.skills.includes(skillDigitada.toLocaleUpperCase()));

        if(devsFiltrados.length === 0){
            alert("Nenhum desenvolvedor(a) com essa skill")
        } else{
            setListaDevsFiltrados(devsFiltrados)
        }
    }

    function retornoDevsGeral(event: any){
        if(event.target.value === "") {
            setListaDevsFiltrados(devs)
        }
        setSkillDigitada(event.target.value)
    }


    return (

        <>
            <main>
                <div className="container container_lista_devs">
                    <div className="lista_devs_conteudo">
                        <h1>Lista de Devs</h1>
                        <hr />
                        <form method="post" onSubmit={buscarPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar desenvolvedores</label>
                                <div className="campo-label">
                                    <input type="search" name="campo-busca" id="busca" placeholder="Buscar desenvolvedores por tecnologias..." onChange={retornoDevsGeral} />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {listaDevsFiltrados.map((dev: any, index: number) =>{
                                    return <li>
                                        <CardDev 
                                        foto={dev.img_perfil}
                                        nome={dev.nome}
                                        email={dev.email}
                                        techs={dev.skills}
                                        />
                                    </li>
                                }
                                )}

                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}