import React from 'react';
import ClientForm from './ClientForm';

const AddClient = ({ history, clients, setClients }) => {
  const handleOnSubmit = (client) => {
    setClients([client, ...clients]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <ClientForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddClient;