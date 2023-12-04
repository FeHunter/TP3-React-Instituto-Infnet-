import { useState } from 'react';
import { Card } from '../../Default/Card/Card';

const corAmarela = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '64px',
  height: '64px',
  backgroundColor: 'yellow',
};
const corVermelho = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '64px',
  height: '64px',
  backgroundColor: 'red',
};

export function TP3_07() {
  const [cores, setCores] = useState('');
  const cor = cores ? corVermelho : corAmarela;
  return (
    <Card>
      <p>TP 3.7</p>
      <p>Colocar no JSX principal do TP</p>
      <div style={cor}></div>
      <button onClick={() => setCores(!cores)}>Alterar cor</button>
    </Card>
  );
}
