import mongoose from "mongoose"

export function mongooseConnect(){
    if(mongoose.connection.readyState === 1){
        console.log('db connected')
        return mongoose.connection.asPromise()
    } else {
        console.log('gooz')
        const uri : any = process.env.MONGODB_URI
        return mongoose.connect(uri)
    }
}  

 