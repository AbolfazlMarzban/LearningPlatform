import multiparty from "multiparty"
import path from "path";
import fs from "fs"

export default async function handle(req: any, res:any){
    const form = new multiparty.Form();
    form.parse(req,  (err, fields, files)=> {
        if(err) throw err;
        console.log('files', files)
        for(var i=0; i< files.image.length; i++){
            if(process.env.INIT_CWD){
                var base = process.env.INIT_CWD.toString()
                var newPath = path.join(base, "public", "uploads", files.image[i].originalFilename)
                console.log('newPath', newPath)
                      fs.rename(files.image[i].path, newPath, (err)=>{
                throw err;
            })
            }

      
        }
        res.json('ok')
    })
}

export const config = {
    api: {bodyParser: false}
}