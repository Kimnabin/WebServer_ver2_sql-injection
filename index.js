const app = require('./src/app');

const PORT = 3088;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});