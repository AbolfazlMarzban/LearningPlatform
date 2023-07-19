import multiparty from "multiparty"
import path from "path";

export default async function handle(req: any, res:any){
    const form = new multiparty.Form();
    form.parse(req,  (err, fields, files)=> {
        if(err) throw err;
        console.log('files', files)
        console.log('fields', fields)
        res.json('ok')
    })
}

export const config = {
    api: {bodyParser: false}
}