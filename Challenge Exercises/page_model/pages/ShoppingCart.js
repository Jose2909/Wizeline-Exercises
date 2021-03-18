import { Selector } from 'testcafe'

class ShoppingCart 
{
    constructor()
    {
        this.pageTitle          = Selector('#contents_wrapper > .subheader')
        this.backPack           = Selector('.cart_item_label  a > .inventory_item_name').withExactText('Sauce Labs Backpack')
        this.bickeLight         = Selector('.cart_item_label  a > .inventory_item_name').withExactText('Sauce Labs Bike Light')
        this.boltTShirt         = Selector('.cart_item_label  a > .inventory_item_name').withExactText('Sauce Labs Bolt T-Shirt')
        this.checkOut           = Selector('.cart_footer a').withExactText('CHECKOUT')
    }
    
}

export default new ShoppingCart