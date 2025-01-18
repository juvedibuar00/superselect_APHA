import './cadastroUsuario.css';

function CadastroUsuario() {
    return (
        <div className="cadastro-container">
            <div className="header">
                <h1>Cadastro de Usuário</h1>
            </div>
            <div className="form-container">
                <div className="input-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" />
                </div>
                <div className="input-group">
                    <label htmlFor="fullName">Nome Completo</label>
                    <input type="text" id="fullName" placeholder="Digite seu nome completo" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha" />
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
