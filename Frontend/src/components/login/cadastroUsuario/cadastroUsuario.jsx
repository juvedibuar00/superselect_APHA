import './cadastroUsuario.css';
// Importações
import { useState } from 'react';
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
            senha: password,
        };
        axios.post('http://localhost:3001/autth/register', dadosCadastro)
        .then(Response => {
            // console.log(Response.data);
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
            <div className="form-container">
                
                <div className="input-group">
                    <label htmlFor="fullName">Nome Completo</label>
                    <input name='name' type="text" id="fullName" placeholder="Digite seu nome completo"
                    onChange={(e) => setName (e.target.value)}
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


                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirme a Senha</label>
                    <input type="password" id="confirmPassword" placeholder="Confirme sua senha" />
                </div>


                <div className="input-group">
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" placeholder="Digite seu telefone" />
                </div>
                <button className="submit-btn">Cadastrar</button>
            </div>
            <div className="footer">
                <p>Já tem uma conta? <a href="/login">Entrar</a></p>
            </div>
        </div>
    );
}

export default CadastroUsuario;
