import multiparty from "multiparty"
import path from "path";
import fs from "fs"

export default async function handle(req: any, res:any){
    const form = new multiparty.Form();
    form.parse(req,  (err, fields, files)=> {
        if(err) throw err;
        // console.log('files', files)
            if(process.env.INIT_CWD){
                var base = process.env.INIT_CWD.toString()
                var newPath = path.join(base, "public", "uploads", files.image[0].originalFilename)
                      fs.rename(files.image[0].path, newPath, (err)=>{
                throw err;
            })
            // const dest = path.join('public', 'uploads', files.image[0].originalFilename)
            var link = '/'+ 'uploads'+ '/'+ files.image[0].originalFilename
            res.json(link)
        }
    })
}

export const config = {
    api: {bodyParser: false}
}