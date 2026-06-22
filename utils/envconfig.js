class envconf{
   constructor(){
   this.config={
    dev:{
        url:'https:dev.saucedemo.com',
        username:'devuser',
        password:'devpass'

    },

    staging:{
        url:'https:staging.saucedemo.com',
        username:'satguser',
        password:'stagpass'
    },

    prod:{
        url:'https://www.saucedemo.com',
        username:'standard_user',
        password:'secret_sauce'
    }
   }

   }

    configinfo(env){
    const selected= this.config[env]
    if(!selected){
        throw new Error(`"${env}" environment exist nhn karta`)
    }
    return selected;
   }
}

module.exports= {envconf}