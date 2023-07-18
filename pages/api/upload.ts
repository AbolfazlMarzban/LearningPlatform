import multiparty from "multiparty"

export default async function handle(req: any, res:any){
    const form = new multiparty.Form();
    form.parse(req, async ()=> {
        
    })
}

export const config = {
    api: {bodyParser: false}
}