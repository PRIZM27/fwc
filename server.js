const dotenv = require('dotenv');

// this command/method provided by dotenv package will read our variables from the file and save them as nodejs environment variables

process.on('uncaughtException', err => { 
  console.log('UNCAUGHT EXCEPTION 💥 Shutting down....');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({path: './config.env'});


const app = require('./app');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => { 
  console.log(`App running on port ${port}`)
});