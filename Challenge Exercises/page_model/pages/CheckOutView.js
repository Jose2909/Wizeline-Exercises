import { Selector } from 'testcafe'

class CheckOutView
{
    constructor()
    {
        this.subHeader          = Selector('.subheader').withExactText('Checkout: Overview')
        this.backPack           = Selector('.cart_item_label  a > .inventory_item_name').withExactText('Sauce Labs Backpack')
        this.bickeLight         = Selector('.cart_item_label  a > .inventory_item_name').withExactText('Sauce Labs Bike Light')
        this.boltTShirt         = Selector('.cart_item_label  a > .inventory_item_name').withExactText('Sauce Labs Bolt T-Shirt')
        this.finishBtn          = Selector('.cart_footer > a').withExactText('FINISH')

    }
}
export default new CheckOutView