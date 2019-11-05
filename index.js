require('dotenv').config();

const app = require('./src/server/app');
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
