class errorhandle{
    constructor(){
        this.errors=[]
    }

    errhandle(error, context){
        const errObj={
        message: error.message,
        context: context,
        time: new Date().toLocaleTimeString()
        }
    this.errors.push(errObj);
    }

    hasErrors(){
        return this.errors.length>0
    }

    printErrors(){
        if(!this.hasErrors){
            console.log('no errors')
        } console.log('errors report')
        this.errors.forEach((err,ind)=>{
            console.log(`${ind+1}: [${err.time}]  "${err.context}" => ${err.message} `)
        })
    }
}

module.exports= {errorhandle};