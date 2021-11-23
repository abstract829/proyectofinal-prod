const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();


app.use( express.static('public') );

app.use( cors() );

app.use( express.json() )

app.use( '/auth', require('./routes/auth') );
app.use( '/ofertas', require('./routes/ofertas') );
app.use( '/foro', require('./routes/foro') );

app.get('*', (req,res) =>{
    res.sendFile( path.resolve(__dirname, 'public/index.html'))
})

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});

