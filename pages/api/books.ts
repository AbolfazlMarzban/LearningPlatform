import { mongooseConnect } from "@/lib/mongoos";
import {Book} from "@/models/book"

export default async function handler(req: any, res: any) {
    await mongooseConnect();
    const { method } = req;
    if (method == "POST") {
        console.log("req body", req.body);
        const { name,description, address, price } = req.body;
        const BookDoc = await Book.create({
          name,
          description,
          address,
          price
        });
        res.json(BookDoc);
      }
      if (method == "PUT") {
        if (req.query?.id) {
          let result;
          if(req.body.address){
          const { name, description, address, price } = req.body;
           result =  await Book.updateOne(
            { _id: req.query.id },
            { name: name,  description: description, address: address, price: price }
          );
          } else {
            const { name, description, url, price } = req.body;
            result =  await Book.updateOne(
              { _id: req.query.id },
              { name: name,  description: description, address: url, price :price }
            );
          }
          res.json(result);
        }
      }
      if (method === "GET") {
        if (req.query?.id) {
          const result = await Book.findOne({ _id: req.query.id });
          res.json(result);
        } else {
          res.json(await Book.find());
        }
      }
      if(method == "DELETE"){
        if(req.query?.id){
          const result = await Book.deleteOne({ _id: req.query.id })
          res.json(true)
        }
      }
}