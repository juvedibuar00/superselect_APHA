
import './telaLogin.css'
// Todo vez que realizar a importação de autohtml, é preciso criar funçao para receber o codigo do auto, como feito a seguir.

function TelaLogin() {
    return (
        <div class="login">
            <div class="rectangle-35"></div>
            <div class="foto-usuario">
                <div class="group-40">
                    <div class="group-39">
                        <div class="ellipse-2"></div>
                    </div>
                    <div class="team"></div>
                </div>
                <img class="user-male" src="user-male0.png" />
            </div>
            <div class="email">
                <img class="rectangle-36" src="rectangle-360.svg" />
                <img class="gmail-logo" src="gmail-logo0.png" />
                <div class="e-mail">E-mail</div>
            </div>
            <div class="cadastrar-se">
                <div class="cadastre-se">Cadastre-se</div>
            </div>
            <div class="password">
                <img class="rectangle-37" src="rectangle-370.svg" />
                <div class="password2">Password</div>
                <img class="lock" src="lock0.png" />
            </div>
            <div class="login2">
                <div class="rectangle-38"></div>
                <div class="login3">Login</div>
            </div>
        </div>


    )
}

export default TelaLogin




