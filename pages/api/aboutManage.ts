import { mongooseConnect } from "@/lib/mongoos";
import { About } from "@/models/about";

export default async function handler(req: any, res: any) {
    await mongooseConnect();
    const { method } = req;
    if (method == "POST") {
        const text = req.body.about
        const result = await About.updateMany({text: text})
        res.json(true)
    }
    if(method == "GET"){
        const result = await About.find()
        res.json(result)
    }
}