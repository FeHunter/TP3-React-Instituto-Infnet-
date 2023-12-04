import { useState } from 'react';
import { Input } from './Input';
import { Card } from '../../Default/Card/Card';

export function TP3_01() {
  const [text, setText] = useState('');
  return (
    <Card>
      <p>TP 3.1</p>
      <Input
        type="Text"
        value={text}
        placeholder="digite..."
        onChange={(e) => setText(e.target.value)}
      />
    </Card>
  );
}
