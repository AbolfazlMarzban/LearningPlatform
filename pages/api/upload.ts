// /pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: './public/uploads/', // Set the destination folder to store uploaded images
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).single('image');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  upload(req, res, function (err: any) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json({ message: 'Multer error: ' + err.message });
    } else if (err) {
      return res.status(500).json({ message: 'Unknown error: ' + err.message });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Return the file path or other necessary information
    return res.status(200).json({ filePath: '/uploads/' + req.file.originalname });
  });
}
