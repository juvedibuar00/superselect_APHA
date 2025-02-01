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
            <form className="form-container" onSubmit={handleSubmit}>

                <div className="input-group">
                    <label htmlFor="fullName">Nome Completo</label>
                    <input name='name' type="text" id="fullName" placeholder="Digite seu nome completo"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />


                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input name='email' type="email" id="email" placeholder="Digite seu e-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required

                        />
                    </div>

                </div>
                <div className="input-group">
                    <label htmlFor="password">Senha</label>
                    <input name='password' type="password" id="password"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required

                    />
                </div>


                {/* <div className="input-group">
                    <label htmlFor="confirmPassword">Confirme a Senha</label>
                    <input type="password" id="confirmPassword" placeholder="Confirme sua senha" />
                </div> */}


                <div className="input-group">
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" placeholder="Digite seu telefone" />
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
