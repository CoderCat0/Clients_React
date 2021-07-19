import React from 'react';
import _ from 'lodash';
import Client from './Client';

const ClientsList = ({ clients, setClients }) => {

  const handleRemoveClient = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <React.Fragment>
      <div className="client-list">
        {!_.isEmpty(clients) ? (
          clients.map((client) => (
            <Client key={client.id} {...client} handleRemoveClient={handleRemoveClient} />
          ))
        ) : (
          <p className="message">Não existem clientes criados.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ClientsList;