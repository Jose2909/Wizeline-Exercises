import { Selector, t } from 'testcafe'
import {CREDENTIALS} from '../data/Constants'


class CheckOutInfo 
{
    constructor()
    {
        this.pageTitle          = Selector('#contents_wrapper > .subheader')
        this.backPack           = Selector('.cart_item_label  a > .inventory_item_name').w
        this.checkOutName       = Selector('.checkout_info > #first-name') 
        this.checkOutLastName   = Selector('.checkout_info > #last-name')
        this.checkOutPostalCode = Selector('.checkout_info > #postal-code')
        this.errorMessage       = Selector('form > h3')
        this.continueBtn        = Selector('.checkout_buttons > input')
    }
    async fillInformation()
    {
        await t
                .typeText(this.checkOutName, CREDENTIALS.VALID_CHECKOUT.CHECKOUTNAME)
                .typeText(this.checkOutLastName, CREDENTIALS.VALID_CHECKOUT.CHECKOUTLASTNAME)
                .typeText(this.checkOutPostalCode, CREDENTIALS.VALID_CHECKOUT.CHECKOUTZIPCODE)
                .click(this.continueBtn)
    }
}
export default new CheckOutInfo    