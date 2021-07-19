import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Client = ({
  id,
  nome,
  nacionalidade,
  email,
  sexo,
  NIF,
  datadenascimento,
  handleRemoveClient
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '22rem' }} className="client">
      <Card.Body>
        <Card.Title className="client-title">{nome}</Card.Title>
        <div className="client-details">
          <div>Nacionalidade: {nacionalidade}</div>
          <div>Email: {email} </div>
          <div>NIF: {NIF} </div>
          <div>Sexo: {sexo} </div>
          <div>Data de nascimento: {datadenascimento} </div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveClient(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Client;