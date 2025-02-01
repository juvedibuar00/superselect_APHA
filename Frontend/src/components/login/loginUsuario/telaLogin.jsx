import './telaLogin.css'
// Todo vez que realizar a importação de autohtml, é preciso criar funçao para receber o codigo do auto, como feito a seguir.

function TelaLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Configuração dos useStates
    const dadosCadastro = {
        email: email,
        password: password
    };
    console.log(dadosCadastro)
    axios.post('http://localhost:3001/auth/register', dadosCadastro)
        .then(response => {
            console.log(response.data);
            alert('Usuário Cadastrado com Sucesso!!!');
            setEmail('');
            setPassword('');
        })
        .catch(error => {
            console.error('Erro ao Cadastrar Usuário:', error); 
            // seError(error.response?.data || 'Erro desconhecido')
        });


};



  return (
    <>

      <div class="container mt-5">
        <h2 class="text-center mb-4">Login</h2>
        <div class="row justify-content-center">
          <div class="col-md-4">
            <form>

              <div class="mb-3 mt-6 text-center ">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                
                
                />
              </div>

              <div class="mb-3 text-center">
                <label for="senha" class="form-label">Senha</label>
                <input type="password" class="form-control" id="senha" placeholder="Digite sua senha" 
                
                 onChange={(e) => setPassword(e.target.value)}
                 value={password}
                 required
                
                />
              </div>

              <div class="text-center">
                <button type="submit" class="btn btn-primary w-50">Entrar</button>
              </div>
              <br />

              <div class="text-center">
                <button type="submit" class="btn btn-primary w-50">Cadastre-se</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>



  )
}

export default TelaLogin



