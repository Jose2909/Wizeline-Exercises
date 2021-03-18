import WelcomePage from '../pages/WelcomePage'
import {CREDENTIALS} from '../data/Constants'
import Products from '../pages/Products'
import ShoppingCart from '../pages/ShoppingCart'
import { Role } from 'testcafe';


const validUser = Role(CREDENTIALS.TEST_URL.TESTURL, async t =>
    {
    await t
        .typeText(WelcomePage.userName, CREDENTIALS.VALID_USER.USER)
        .typeText(WelcomePage.userPassword, CREDENTIALS.VALID_USER.PASSWORD)
        .click(WelcomePage.loginButton)
    
    },{ preserveUrl: true })


fixture('Purchase Feature testing')
    .page(CREDENTIALS.TEST_URL.TESTURL)
    

    test('Login with a Valid User', async t => {
        await t
            .useRole(validUser)        
            .expect(Products.loginLogo.exists).ok()
            .expect(Products.loginLogo.innerText).eql('Products')
            
    })

    test('Login with an Invalid User', async t => {  
        await t
            .typeText(WelcomePage.userName, CREDENTIALS.INVALID_USER.USER)
            .typeText(WelcomePage.userPassword, CREDENTIALS.INVALID_USER.PASSWORD)
            .click(WelcomePage.loginButton)
            .expect(WelcomePage.errorMessage.exists).ok()
            .expect(WelcomePage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
    })

    test('Logout from product´s page', async t => {
        await t
                .useRole(validUser)
                .expect(Products.loginLogo.innerText).eql('Products')
                .click(Products.burguerMenu)
                .click(Products.loginLogo)
                .expect(WelcomePage.loginLogo.exists).ok()    
    })

    test('Navigate to shopping cart', async t => {
        await t
                .useRole(validUser)
                .click(Products.shoppingCart)
                .expect(ShoppingCart.pageTitle.exists).ok()
                .expect(ShoppingCart.pageTitle.innerText).eql('Your Cart')    
        
    })

    test('Add A Single Item to Shopping Cart', async t => {
        await t
                .useRole(validUser)
                .click(Products.backPackItemAdd)
                .click(Products.shoppingCart)
                .expect(ShoppingCart.backPack.innerText).eql('Sauce Labs Backpack')  
        
    })





