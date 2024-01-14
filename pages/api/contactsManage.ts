import { mongooseConnect } from "@/lib/mongoos";
import { Contacts } from "@/models/contacts";

export default async function handler(req: any, res: any) {
    await mongooseConnect();
    const { method } = req;
    if (method == "POST") {
        const data = req.body.data
        console.log('data', data)
        const result = await Contacts.updateMany({
                'phonenumber': data.phonenumber,
                'email': data.email,
                'linkedin': data.linkedin,
                'github': data.github,
                'instagram': data.instagram
        }
    )
        res.json(true)
    }
    if(method == "GET"){
        const result = await Contacts.find()
        res.json(result)
    }
}