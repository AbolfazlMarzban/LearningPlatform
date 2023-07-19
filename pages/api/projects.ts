import { mongooseConnect } from "@/lib/mongoos"
import { Project } from "@/models/project";

export default async function handler(req: any, res:any){
    const {method} = req
    await mongooseConnect();
    if(method == "POST"){
        console.log('req body', req.body)
        const {name, link, description, address} = req.body
        const projectDoc = await Project.create({
            name, link, description, address
        })
        res.json(projectDoc)
    }
    if(method === "GET"){
        if(req.query?.id){
            res.json(await Project.findOne({_id:req.query.id}))
        } else {
            res.json(await Project.find())
        }
    }
}