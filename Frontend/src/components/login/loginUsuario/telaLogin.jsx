
import './telaLogin.css'
// Todo vez que realizar a importação de autohtml, é preciso criar funçao para receber o codigo do auto, como feito a seguir.

function TelaLogin() {
    return (
      <>
      <nav class="navbar bg-body-tertiary position-sticky">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="https://t3.ftcdn.net/jpg/03/64/04/62/360_F_364046237_vNzvuBopD8UQO6cb78djjLZ7WaECfNDR.jpg" alt="Bootstrap" width="100" height="90"/>
        </a>
      </div>
    </nav>
    
    <div class="container mt-5">
      <h2 class="text-center mb-4">Login</h2>
      <div class="row justify-content-center">
        <div class="col-md-4">
          <form>

            <div class="mb-3 mt-6 text-center ">
              <label for="email" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail" />
            </div>

            <div class="mb-3 text-center">
              <label for="senha" class="form-label">Senha</label>
              <input type="password" class="form-control" id="senha" placeholder="Digite sua senha" />
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




