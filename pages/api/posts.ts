import { mongooseConnect } from "@/lib/mongoos";
import { Post } from "@/models/posts";
import { Project } from "@/models/project";

export default async function handler(req: any, res: any) {
  await mongooseConnect();
  const { method } = req;
  if (method == "POST") {
    console.log("req body", req.body);
    const { title, text, description, postPic } = req.body;
    const projectDoc = await Post.create({
      title,
      text,
      description,
      postPic,
    });
    res.json(projectDoc);
  }
  if (method == "PUT") {
    if (req.query?.id) {
      let result;
      if(req.body.postPic){
      const { title, text, description, postPic } = req.body;
       result =  await Post.updateOne(
        { _id: req.query.id },
        { title: title, text: text, description: description, postPic: postPic }
      );
      } else {
        const { title, text, description, postPic } = req.body;
        result =  await Post.updateOne(
          { _id: req.query.id },
          { title: title, text: text, description: description, postPic: postPic }
        );
      }
      res.json(result);
    }

  }
  if (method === "GET") {
    if (req.query?.id) {
      const result = await Post.findOne({ _id: req.query.id });
      res.json(result);
    }
     else if(req.query?.name){
      const result = await Post.findOne({ title: req.query.name })
      res.json(result)
    } 
    else {
      res.json(await Post.find());
    }
  }
  if(method == "DELETE"){
    if(req.query?.id){
      const result = await Post.deleteOne({ _id: req.query.id })
      res.json(true)
    }
  }
}
