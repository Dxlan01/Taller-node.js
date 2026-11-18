import { useState, useEffect } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [jugadores, setJugadores] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/jugadores')
      .then(res => res.json())
      .then(data => {
        setJugadores(data);
      });
  }, []);

  const registrarPedido = () => {
    fetch('http://localhost:3001/pedidos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: nombre
      })
    })
      .then(res => res.json())
      .then(data => {
        alert(data.mensaje);
        setNombre('');
      });
  }; 

  return (
    <div>
      <h1>Lista de Jugadores</h1>
      <ul>
        {jugadores.map((jugador, index) => (
          <li key={index}>{jugador}</li>
        ))}
      </ul>
      <hr />
      <h1>Pedidos de arepas</h1>

      <input
        type="text"
        placeholder="Nombre del cliente"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />
      <button onClick={registrarPedido}>
        Registrar pedido
      </button>
    </div>
  );
}

export default App;