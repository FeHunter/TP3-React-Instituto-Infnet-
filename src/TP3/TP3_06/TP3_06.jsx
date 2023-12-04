import { useState } from 'react';
import { Card } from '../../Default/Card/Card';

export function TP3_06() {
  const [contador, setContador] = useState(0);
  return (
    <Card>
      <p>TP 3.6</p>
      <p>Colocar no JSX principal do TP</p>

      <button onClick={() => setContador((contador) => contador - 1)}>-</button>
      <button onClick={() => setContador((contador) => contador + 1)}>+</button>
      <p>{contador}</p>
    </Card>
  );
}
