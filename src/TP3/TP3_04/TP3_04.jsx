import { useState } from 'react';
import { Card } from '../../Default/Card/Card';
import { Select } from '../../TP3/TP3_04/Select';

export function TP3_04() {
  const [option, setOption] = useState('Selecionar');
  const testOnChange = () => {
    alert('OnChange funciona');
  };

  return (
    <Card>
      <p>TP 3.4</p>
      <Select
        value={option}
        option1="Playstation"
        option2="Xbox"
        onChange={(e) => {
          setOption(e.value);
        }}
      />
    </Card>
  );
}
