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
      const { name, link, description, address } = req.body;
      await Project.updateOne(
        { _id: req.query.id },
        { name: name, link: link, description: description, address: address }
      );
      res.json(true);
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
}
