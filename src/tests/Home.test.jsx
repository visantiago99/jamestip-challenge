import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Home from '../pages/Home';

it('Renderiza corretamente o Título da página', () => {
  renderWithRouter(<Home />);
  const tituloHome = screen.getByText(/Adicionar produto ao sistema/i);
  expect(tituloHome).toBeTruthy();
})

it('Verifica input codigo do produto', () => {
  renderWithRouter(<Home />);
  const codigoProduto = screen.getByPlaceholderText(/Código do Produto/i);
  expect(codigoProduto).toBeTruthy();
})

it('Verifica input categoria do produto', () => {
  renderWithRouter(<Home />);
  const categoriaProduto = screen.getByPlaceholderText(/Código do Produto/i);
  expect(categoriaProduto).toBeTruthy();
})

it('Verifica input Nome do produto', () => {
  renderWithRouter(<Home />);
  const nomeProduto = screen.getByPlaceholderText(/Nome do Produto/i);
  expect(nomeProduto).toBeTruthy();
})

it('Verifica input Nome do fornecedor', () => {
  renderWithRouter(<Home />);
  const nomeFornecedor = screen.getByPlaceholderText(/Nome do Fornecedor/i);
  expect(nomeFornecedor).toBeTruthy();
})

it('Verifica input Valor do produto', () => {
  renderWithRouter(<Home />);
  const valorProduto = screen.getByPlaceholderText(/Valor do Produto/i);
  expect(valorProduto).toBeTruthy();
})

it('Verifica botão Adicionar produto', () => {
  renderWithRouter(<Home />);
  const botaoAdd = screen.getByText(/^Adicionar produto$/i);
  expect(botaoAdd).toBeTruthy();
})

it('Verifica botão Lista de produtos', () => {
  const {history} = renderWithRouter(<Home />);
  expect(history.location.pathname).toBe('/')
  const botaoLista = screen.getByText(/Lista de produtos/i);
  expect(botaoLista).toBeTruthy();
  fireEvent.click(botaoLista)
  expect(history.location.pathname).toBe('/ProductList')
})

