import { useState } from 'react';
import { Input } from './Components/Input';
import { TextArea } from './Components/TextArea';
import { Button } from './Components/Button';

const style = {
  display: 'flex',
  flexDirection: 'column',
};

export function Form() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function SubmitForm(e) {
    if (nome != '' && sobrenome != '' && email != '' && mensagem != '') {
      e.preventDefault;
      alert(`
      Nome: ${nome}
      Sobrenome: ${sobrenome}
      E-mail: ${email}
      Mensagem: ${mensagem}
      `);
    } else {
      alert('Preencher todos os campos');
    }
  }

  return (
    <div style={style}>
      <Input
        type="Text"
        value={nome}
        placeholder="nome..."
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        type="Text"
        value={sobrenome}
        placeholder="sobrenome..."
        onChange={(e) => setSobrenome(e.target.value)}
      />
      <Input
        type="Email"
        value={email}
        placeholder="email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextArea
        type="Email"
        value={mensagem}
        placeholder="sua mensagem..."
        cols={10}
        rows={5}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <Button label="Enviar" onClick={SubmitForm} />
    </div>
  );
}
