const {test, expect} = require ('@playwright/test')
const {loginpage}= require('../pages/loginpage')
const {envconf}= require ('../utils/envconfig')
const {errorhandle}= require ('../utils/errorHandler')
const {testData}= require ('../testdata/logintestdata')

const handler= new errorhandle()
const data= new testData()
const config= new envconf()

const envv= config.configinfo('prod')
const userr= data.getData('validUser')

//test 1 -- valid login
test('valid login', async ({page})=>{
    const loginn= new loginpage(page)
   try {
    await page.goto(envv.url)
    await loginn.loginfunc(userr.user, userr.pass)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
   } catch (error) {
      handler.errhandle(error, 'Valid login test')
   }
})

