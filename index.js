const express = require('express');
const app = express();
const port = process.env.PORT || 8092;
app.listen(port, () => { console.log(`App is up and running @ ${port}`) })