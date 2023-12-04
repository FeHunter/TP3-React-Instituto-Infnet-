import { useState } from 'react';
import { Card } from '../../Default/Card/Card';

export function TP3_05() {
  const [visible, setVisible] = useState(false);
  // OBS: esse ternario não foi o gpt, conhece por causo do C# fazendo jogos na Unity.
  const style = visible
    ? { display: 'block', color: 'red' }
    : { display: 'none' };

  return (
    <Card>
      <p>TP 3.5</p>
      <p>Colocar no JSX principal do TP</p>
      <div style={style}>
        <p>Visível</p>
      </div>
      <input
        type="button"
        value="On/Off"
        onClick={() => setVisible(!visible)}
      />
    </Card>
  );
}
