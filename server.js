const express = require('express');
const app = express();

app.use(express.static('public'));

// Manejar la solicitud GET en la raíz de la aplicación
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor de frontend en ejecución en el puerto ${PORT}`);
});
