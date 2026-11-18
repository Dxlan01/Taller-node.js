const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const jugadores = [
    "Juan Ripe",
    "Juan Espinosa",
    "Juan Lozano"
];
let pedidos = [];
let arqueros = [
    {id: 1, nombre: "David Ospina"},
    {id: 2, nombre: "Super Camilo"},
    {id: 3, nombre: "San Simon Martinez"},
    ]
// Ruta para obtener la lista de jugadores
app.get('/jugadores', (req, res) => {
    res.json(jugadores);
});

app.post ('/pedidos',(req, res)=>{
    const nombre= req.body.nombre;

    pedidos.push(nombre);

    res.json({
        mensaje: "Pedido Registrado",
        pedidos:pedidos
    });
});

app.post ('/arqueros',(req, res)=>{
    const id=parseInt(req.params.id)

    const arquero = arqueros.find(a=>a.id===id);

    if(arquero){
        return res.status(404).json({
            mensaje:"Arquero no encontrado"
        });
    }
    res.json(arquero);
});

// Iniciar el servidor
const PUERTO = 3001;
app.listen(PUERTO, () => {
    console.log(`Servidor prendido en el puerto 3001`);
});