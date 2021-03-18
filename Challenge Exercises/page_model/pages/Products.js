import { Selector } from 'testcafe'

class Products 
{
    constructor()
    {
        this.loginLogo        = Selector('.product_label')
        this.burguerMenu      = Selector('.bm-burger-button')
        this.logOut           = Selector('#logout_sidebar_link')
        this.shoppingCart     = Selector('div >.shopping_cart_link')
        this.backPackItemAdd  = Selector('div.pricebar > button').nth(0)
        this.bikeLightAdd     = Selector('div.pricebar > button').nth(1)
        this.boltTShirtAdd    = Selector('div.pricebar > button').nth(2)
    }
    
}

export default new Products