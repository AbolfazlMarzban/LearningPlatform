export default async function handler(req: any, res:any){
    const {method} = req
    if(method == "POST"){
        console.log('req body', req.body)
    }
}