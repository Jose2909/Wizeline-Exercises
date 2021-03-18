import dotenv from 'dotenv'
dotenv.config()
export const  CREDENTIALS = 
{
    TEST_URL:
    {
        TESTURL: process.env.URL
    },
    VALID_USER:
    {
        USER: process.env.USER,
        PASSWORD: process.env.PASSWORD

    },

    INVALID_USER:
    {
        USER: 'testuser@example.com',
        PASSWORD: 'test13'

    },
    VALID_CHECKOUT:
    {
        CHECKOUTNAME: process.env.NAME,
        CHECKOUTLASTNAME: process.env.LASTNAME,
        CHECKOUTZIPCODE: process.env.ZIPCODE
    }
}