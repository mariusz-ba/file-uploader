// Module dependencies
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import wds from './wds';
import fileUpload from 'express-fileupload';

import { storagePath } from './config';

// Controllers
import { FilesController } from './routes/files';

const app = express();
wds(app);

// Configuration
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(helmet());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, '../../dist')));
app.use('/storage', express.static(storagePath));


// API
app.use('/api/v1/files', FilesController);

// Application
app.get('*', (req, res) => {
  res.render('index');
})

// Start listenning
app.listen(
  app.get('port'),
  () => console.log(`Running on localhost:${app.get('port')}`)
);
