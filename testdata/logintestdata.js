class testData{
    constructor(){
        this.storedata={
          validUser:{user:'standard_user', pass: 'secret_sauce'},
          invalidUser:{user:'stwid_user', pass: 'sshs_sauce'},
          pageTitle: 'Swag Labs' 
        }
    }

    getData(key){
        return this.storedata[key]
    }
}

module.exports= {testData};