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

router.get(
  '/download/:filename',
  (req, res) => {
    const file = path.resolve(storagePath, req.params.filename);
    res.download(file);
  }
)

router.post(
  '/',
  async (req, res) => {
    if(!req.files)
      return res.status(400).send('No files were uploaded.');
    
    const { files } = req;
    const result = [];

    for(const key in files) {
      const file = files[key];
      const filePath = path.resolve(storagePath, file.name);
      await file.mv(filePath);
      const stats = fs.statSync(filePath);
      const pattern = /(\w+)\.(.*)/;
      result.push({
        fullname: file.name,
        name: file.name.match(pattern)[1],
        type: file.name.match(pattern)[2],
        directory: stats.isDirectory() ? true : false,
        size: stats.size,
      })
    }

    res.status(200).json(result);
  }
)

router.delete(
  '/:filename',
  async (req, res) => {
    try {
      const file = path.resolve(storagePath, req.params.filename);
      const stats = fs.statSync(file);
      await fs.unlink(file);
      res.status(200).json({
        fullname: req.params.filename,
      });
    } catch (e) {
      res.status(400).send('Bad request');
    }
  }
)

export default router;