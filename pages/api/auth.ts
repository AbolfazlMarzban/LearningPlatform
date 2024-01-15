import { mongooseConnect } from "@/lib/mongoos";
import { About } from "@/models/about";
import { Admin } from "@/models/admin";

export default async function handler(req: any, res: any) {
    await mongooseConnect();
    const { method } = req;
    if (method == "POST") {
        const data = req.body
        const result = await Admin.findOne({username: data.username, password: data.password})
        res.json(result)
    }
}