import { Selector } from 'testcafe'

class WelcomePage 
{
    constructor()
    {
        this.loginLogo     = Selector('.login_logo')
        this.userName      = Selector('input[name="user-name"]')
        this.userPassword  = Selector('input[name="password"]')
        this.loginButton   = Selector('input.btn_action')
        this.errorMessage  = Selector('form > h3')
    }
}

export default new WelcomePage