import { useState } from 'react';
import { Card } from '../../Default/Card/Card';
import { Select } from './Select';

function Abas(aba) {
  switch (aba) {
    case 'Cores':
      return (
        <ul>
          <li>Azul</li>
          <li>Verde</li>
          <li>Vermelho</li>
        </ul>
      );
    case 'Frutas':
      return (
        <ul>
          <li>Maçã</li>
          <li>Laranja</li>
          <li>Banana</li>
        </ul>
      );
    case 'Animais':
      return (
        <ul>
          <li>Gato</li>
          <li>Cachorro</li>
          <li>Girafa</li>
        </ul>
      );
  }
}

export function TP3_08() {
  const [aba, setAba] = useState('Cores');
  return (
    <Card>
      <p>TP 3.8</p>
      <p>Colocar no JSX principal do TP</p>
      <Select
        option1="Cores"
        option2="Frutas"
        option3="Animais"
        onChange={(e) => setAba(e.target.value)}
      />
      {Abas(aba)}
    </Card>
  );
}
