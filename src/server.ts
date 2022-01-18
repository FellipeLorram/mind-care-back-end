import mongoose from 'mongoose';
import app from './App';

declare const process: {
  env: {
    CONNECTIONSTRING: string
    PORT: number
  }
};

require('dotenv').config();

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('Conectado');
  })
  .catch((e) => console.log(e));

app.on('Conectado', () => {
  app.listen(process.env.PORT || 3333, () => console.log('http://localhost:3333'));
});
