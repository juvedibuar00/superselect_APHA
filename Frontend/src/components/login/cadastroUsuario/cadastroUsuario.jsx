import './cadastroUsuario.css';
// Importações
import { useState } from 'react';
import { Link } from "react-router-dom"; // Importação do Link
import axios from 'axios';

function CadastroUsuario() {
    // uteis para coletar dados do usuario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Configuração dos useStates
        const dadosCadastro = {
            nome: name,
            email: email,
            password: password
        };
        console.log(dadosCadastro)
        axios.post('http://localhost:3001/auth/register', dadosCadastro)
            .then(response => {
                console.log(response.data);
                alert('Usuário Cadastrado com Sucesso!!!');
                setName('');
                setEmail('');
                setPassword('');
            })
            .catch(error => {
                console.error('Erro ao Cadastrar Usuário:', error); 
                // seError(error.response?.data || 'Erro desconhecido')
            });


    };


    return (
        <div className="cadastro-container">
            <div className="header">
                <h1>Cadastro de Usuário</h1>
            </div>
            <form className="form-container " onSubmit={handleSubmit}>


            <div class="mb-3 mt-6  ">
              <label for="email" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="email" placeholder="Digite seu E-mail "
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </div>

                <div class="mb-3 mt-6  ">
              <label for="email" class="form-label">Nome</label>
              <input type="email" class="form-control" id="email" placeholder="Digite seu Nome "
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>

              
                <div class="mb-3 mt-6  ">
                    <label htmlFor="password">Senha</label> 
                    <input name='password' type="password"  class="form-control" id="password"placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required

                    />
                </div>


                {/* <div className="input-group">
                    <label htmlFor="confirmPassword">Confirme a Senha</label>
                    <input type="password" id="confirmPassword" placeholder="Confirme sua senha" />
                </div> */}


                <div class="mb-3 mt-6  ">
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" class="form-control" placeholder="Digite seu telefone" />
                </div>


                {/* <Link to="/cadastro" className="submit-btn">Cadastrar-se</Link> */}

                <button className="submit-btn">Cadastrar-se</button>
            </form>
            <div className="footer">
                <p>Já tem uma conta? <a href="/">Login</a></p>

            </div>
        </div>
    );
}

export default CadastroUsuario;
