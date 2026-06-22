const {basepage}= require('./basepage')
class loginpage extends basepage{
    constructor(page){
        super(page)
        this.username='#user-name'
        this.password='#password'
        this.loginbtn='#login-button'
        this.errmsg='.error-message-container'
        
    }

    async loginfunc(username, password){
        await this.fillfunc(this.username, username)
        await this.fillfunc(this.password, password)
        await this.clickfunc(this.loginbtn)
    }

    async geterrmsg(){
        return await this.page.locator(this.errmsg).innerText()
    }



}

module.exports= {loginpage}