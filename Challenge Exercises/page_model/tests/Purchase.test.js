import WelcomePage from '../pages/WelcomePage'
import {CREDENTIALS} from '../data/Constants'
import Products from '../pages/Products'
import ShoppingCart from '../pages/ShoppingCart'
import CheckOutView from '../pages/CheckOutView'
import CheckOutInfo from '../pages/CheckOutInfo'
import Finishpage from '../pages/Finishpage'


fixture('Purschase Feature testing')
    .page(CREDENTIALS.TEST_URL.TESTURL)
    .beforeEach(async t =>
        {
         await t
                .typeText(WelcomePage.userName, CREDENTIALS.VALID_USER.USER)
                .typeText(WelcomePage.userPassword, CREDENTIALS.VALID_USER.PASSWORD)
                .click(WelcomePage.loginButton)
                .click(Products.backPackItemAdd)
                .click(Products.bikeLightAdd)
                .click(Products.boltTShirtAdd)    
                .click(Products.shoppingCart) 
        })

    
    test('Add  Multiple Items to Shopping Cart', async t => {  
         
        await t .expect(ShoppingCart.pageTitle.exists).ok()
        await t .expect(ShoppingCart.backPack.innerText).eql('Sauce Labs Backpack')
        await t .expect(ShoppingCart.bickeLight.innerText).eql('Sauce Labs Bike Light')
        await t .expect(ShoppingCart.boltTShirt.innerText).eql('Sauce Labs Bolt T-Shirt')
        
    })
    
    test('Continue with missing mail information', async t => {
        
        await t
                .click(ShoppingCart.checkOut)    
                .expect(CheckOutInfo.pageTitle.exists).ok()
                .typeText(CheckOutInfo.checkOutName, CREDENTIALS.VALID_CHECKOUT.CHECKOUTNAME)
                .typeText(CheckOutInfo.checkOutLastName, CREDENTIALS.VALID_CHECKOUT.CHECKOUTLASTNAME)
                .click(CheckOutInfo.continueBtn)
        await t.expect(CheckOutInfo.errorMessage.innerText).eql('Error: Postal Code is required')      
        
    })
    
    test('Fill user´s information', async t => {
        await t
                .click(ShoppingCart.checkOut)
        await   CheckOutInfo.fillInformation()                       
        await t.expect(CheckOutView.subHeader.exists).ok()
    })
    
    test('Final Order Items', async t => {
        await t
                .click(ShoppingCart.checkOut)
        await   CheckOutInfo.fillInformation()                
        await t.expect(CheckOutView.subHeader.exists).ok()
        await t.expect(CheckOutView.backPack.exists).ok()
        await t.expect(CheckOutView.bickeLight.exists).ok()
        await t.expect(CheckOutView.boltTShirt.exists).ok()
    })
    test('Complete purchase', async t => {
        await t
                .click(ShoppingCart.checkOut)
        await   CheckOutInfo.fillInformation() 
        await t.expect(CheckOutView.subHeader.exists).ok()                       
               .click(CheckOutView.finishBtn)
        await t.expect(Finishpage.dispatchedConfirmation.exists).ok()
        await t.expect(Finishpage.thankYou.innerText).eql('THANK YOU FOR YOUR ORDER')
    })