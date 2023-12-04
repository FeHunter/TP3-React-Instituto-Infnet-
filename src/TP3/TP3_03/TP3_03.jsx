import { useState } from 'react';
import { Card } from '../../Default/Card/Card';
import { Checkbox } from '../../TP3/TP3_03/Checkbox';

export function TP3_03() {
  const [check, setCheck] = useState(false);
  return (
    <Card>
      <p>TP 3.3</p>
      <Checkbox checked={check} onChange={(e) => setCheck(e.value)} />
    </Card>
  );
}
