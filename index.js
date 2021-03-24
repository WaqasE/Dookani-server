const express = require('express');
const port = process.env.PORT || 8092;
const app = express();


app.get('/', ({ req, res }) => {
    res.send(`app is runing at ${port}`);
})

app.listen(port, () => { console.log(`App is up and running @ ${port}`) })
