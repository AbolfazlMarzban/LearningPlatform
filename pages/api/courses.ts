import { mongooseConnect } from "@/lib/mongoos";
import {Course} from "@/models/course"

export default async function handler(req: any, res: any) {
    await mongooseConnect();
    const { method } = req;
    if (method == "POST") {
        console.log("req body", req.body);
        const { name,description, address, price, link } = req.body;
        const CourseDoc = await Course.create({
          name,
          description,
          address,
          link,
          price
        });
        res.json(CourseDoc);
      }
      if (method == "PUT") {
        if (req.query?.id) {
          let result;
          if(req.body.address){
          const { name, description, address, link , price} = req.body;
           result =  await Course.updateOne(
            { _id: req.query.id },
            { name: name,  description: description, address: address, link: link, price: price }
          );
          } else {
            const { name, description, url, link, price} = req.body;
            result =  await Course.updateOne(
              { _id: req.query.id },
              { name: name,  description: description, address: url, link: link, price :price }
            );
          }
          res.json(result);
        }
      }
      if (method === "GET") {
        if (req.query?.id) {
          const result = await Course.findOne({ _id: req.query.id });
          res.json(result);
        } else if(req.query?.name) {
          const result = await Course.findOne({name: req.query.name})
          res.json(result)
        }
        else {
          res.json(await Course.find());
        }
      }
      if(method == "DELETE"){
        if(req.query?.id){
          const result = await Course.deleteOne({ _id: req.query.id })
          res.json(true)
        }
      }
}