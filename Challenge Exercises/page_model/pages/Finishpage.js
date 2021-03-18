import { Selector } from 'testcafe'

class FinishPage
{
    constructor()
    {
        this.thankYou                = Selector('#checkout_complete_container > h2')
        this.dispatchedConfirmation  = Selector('#checkout_complete_container > .complete-text').withExactText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        

    }
}
export default new FinishPage