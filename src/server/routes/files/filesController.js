import { Router } from 'express';
import { storagePath } from '../../config';
import path from 'path';
import fs from 'fs';

const router = new Router();

router.get(
  '/',
  (req, res) => {
    try {
      const files = fs.readdirSync(storagePath);
      const filesData = files.map(file => {
        const stats = fs.statSync(path.resolve(storagePath, file));
        const pattern = /(\w+)\.(.*)/;
        return {
          fullname: file,
          name: file.match(pattern)[1],
          type: file.match(pattern)[2],
          directory: stats.isDirectory() ? true : false,
          size: stats.size,
        }
      })
      res.status(200).json(filesData);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Bad request' });
    }
  }
);

router.post(
  '/',
  (req, res) => {
    let data = '';

    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', () => {
      console.log('File uploaded');
      res.writeHead(200);
      res.end();
    })
  }
)

export default router;