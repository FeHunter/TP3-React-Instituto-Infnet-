import { useState } from 'react';
import { Card } from '../../Default/Card/Card';

export function TP3_02() {
  const [text, setText] = useState('');

  return (
    <Card>
      <p>TP 3.2</p>
      <p>Colocar no JSX principal do TP</p>
      <textarea
        cols="30"
        rows="10"
        value={text}
        placeholder="digite..."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </Card>
  );
}
