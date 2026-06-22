class basepage{
    constructor(page){
        this.page=page

    }

    async fillfunc(locator, text){
      await this.page.locator(locator).fill(text)
    }

    async clickfunc(locator){
        await this.page.locator(locator).click()
    }

    async waitfunc(ms){
        await this.page.waitForTimeout(ms)
    }

    async gettitle(){
        return await this.page.title()
    }
}

module.exports= {basepage}








