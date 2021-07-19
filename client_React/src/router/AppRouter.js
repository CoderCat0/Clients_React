import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddClient from '../components/AddClient';
import ClientsList from '../components/ClientsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditClient from '../components/EditClient';

const AppRouter = () => {
  const [clients, setClients] = useLocalStorage('clients', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <ClientsList {...props} clients={clients} setClients={setClients} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddClient {...props} clients={clients} setClients={setClients} />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditClient {...props} clients={clients} setClients={setClients} />
              )}
              path="/edit/:id"
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;