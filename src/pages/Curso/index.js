/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner, FaGrinHearts } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  Conteiner,
  Form,
  SubmitButton,
  List,
  CamilaButton,
  Header,
} from './styles';
import api from '../../services/api';
// import logo from '../../logo.png';

export default class Curso extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, loading, repositories } = this.state;
    return (
      <>
        <Header>
          <a href="/">Voltar</a>
        </Header>
        <Conteiner>
          <h1>
            <FaGithubAlt />
            Repositórios
          </h1>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Adicionar repositório"
              value={newRepo}
              onChange={this.handleInputChange}
            />
            <SubmitButton loading={loading}>
              {loading ? (
                <FaSpinner color="#fff" size={14} />
              ) : (
                <FaPlus color="#FFF" size={14} />
              )}
            </SubmitButton>
          </Form>

          <List>
            {repositories.map((repository) => (
              <li key={repository.name}>
                <span>{repository.name}</span>
                <a href="">Detalhes</a>
              </li>
            ))}
          </List>
          <h2>
            <CamilaButton>
              <Link to="/camilinda">
                <FaGrinHearts transform="scale(1.5)" />
              </Link>
            </CamilaButton>
          </h2>
        </Conteiner>
      </>
    );
  }
}
