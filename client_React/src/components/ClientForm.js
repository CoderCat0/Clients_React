import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ClientForm = (props) => {
    const [client, setClient] = useState(() => {
        return {
            nome: props.client ? props.client.nome : '',
            nacionalidade: props.client ? props.client.nacionalidade : '',
            email: props.client ? props.client.email : '',
            NIF: props.client ? props.client.NIF : '',
            sexo: props.client ? props.client.sexo : '',
            datadenascimento: props.client ? props.client.datadenascimento : ''
        };
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { nome, nacionalidade, email, sexo, NIF, datadenascimento } = client;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [nome, nacionalidade, email, sexo, NIF, datadenascimento];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const client = {
                id: uuidv4(),
                nome,
                nacionalidade,
                email,
                sexo,
                NIF,
                datadenascimento
            };
            props.handleOnSubmit(client);
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            default:
                setClient((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="nome"
                        value={nome}
                        placeholder="Insira nome do cliente"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="nacionalidade">
                    <Form.Label>Nacionalidade</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="nacionalidade"
                        value={nacionalidade}
                        placeholder="Insira nacionalidade do cliente"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Insira email do cliente"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="NIF">
                    <Form.Label>NIF</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="NIF"
                        value={NIF}
                        placeholder="Insira NIF do cliente"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="sexo">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="sexo"
                        value={sexo}
                        placeholder="Insira sexo do cliente"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="datadenascimento">
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="date"
                        name="datadenascimento"
                        value={datadenascimento}
                        placeholder="dd/mm/yyyy"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ClientForm;