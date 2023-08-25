//estilização
import { useState } from "react";
//abaixo importa a funcionalidade para navegação do usuario
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import "./style.css";
import secureLocalStorage from "react-secure-storage";


function Login() {
    // state = tipo string e ("") indica que será vazia
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    //var criado para usar a funçao usenavigate
    const navigate = useNavigate()

    //inicio da função para fazer login.
    function fazerLogin(event: any){
        event.preventDefault()
        // console.log( email, senha ) 

        const usuario:object = {
            email:email,
            password:senha
        }

        // Interação com a API
        //api do tipo post encaminha para o endpoint login e irá passar o objeto usuario e usa o tipo promise(assincrona), portanto coloca-se then. Depois coloca-se responsa, esperar uma resposta
        api.post('login', usuario).then ((response) => {
            console.log(response)

            // Para as linhas abaixo, iniciado o npm install react-secure-storage
            	
            secureLocalStorage.setItem("user", response.data)

            //A linha abaixo é voltado para navegar no perfil do usuario
            navigate("/perfil/" + response.data.user.id)
            
        } )
    }

    return (
        <main id="main_login">
            <div className="container container_login">
                <div className="login_conteudo">
                    <h1>Login</h1>
                    <hr />
                    {/* abaixo a função para login */}
                    <form onSubmit={ fazerLogin } className="login_formulario" method="POST">
                        <div className="login_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                onChange={ (event) => setEmail(event.target.value) }
                                placeholder="Digite aqui seu e-mail:"
                                required
                            />
                        </div>
                        <div className="login_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                onChange={ (event) => setSenha(event.target.value) }
                                placeholder="Digite aqui sua senha:"
                                required
                            />
                        </div>
                        <button className="login_botao" type="submit">Logar</button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Login;