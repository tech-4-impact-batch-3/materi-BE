const express = require('express');
const app = express()

const PORT = 3000

const allRouter = require('./routes');

app.use(express.json())
app.use(allRouter)

app.listen(PORT, () => {
  console.log("running on port ", PORT );
})