import { mongooseConnect } from "@/lib/mongoos";
import { Project } from "@/models/project";

export default async function handler(req: any, res: any) {
  await mongooseConnect();
  const { method } = req;
  if (method == "POST") {
    console.log("req body", req.body);
    const { name, link, description, address } = req.body;
    const projectDoc = await Project.create({
      name,
      link,
      description,
      address,
    });
    res.json(projectDoc);
  }
  if (method == "PUT") {
    if (req.query?.id) {
      let result;
      if(req.body.address){
      const { name, link, description, address } = req.body;
       result =  await Project.updateOne(
        { _id: req.query.id },
        { name: name, link: link, description: description, address: address }
      );
      } else {
        const { name, link, description, url } = req.body;
        result =  await Project.updateOne(
          { _id: req.query.id },
          { name: name, link: link, description: description, address: url }
        );
      }
      res.json(result);
    }
  }
  if (method === "GET") {
    if (req.query?.id) {
      const result = await Project.findOne({ _id: req.query.id });
      res.json(result);
    } else {
      res.json(await Project.find());
    }
  }
  if(method == "DELETE"){
    if(req.query?.id){
      const result = await Project.deleteOne({ _id: req.query.id })
      res.json(true)
    }
  }
}
