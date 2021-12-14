import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link' /* Aqui serve para identitifcar dada teste */, () => { //Aqui e umafuncao anonima onde fica o que vai ser testado
  render(<App />);//Serve para rendizar o componente 
  // Aqui esta pegando um elemento da tela que rendeziado dentro dele
  const linkElement = screen.getByText(/learn react/i);//Obtem um elemento da tela onde o aplicativo e rendizado
  //Se encontrado o elemeto na tela buscado pelo texto o teste passara
  expect(linkElement).toBeInTheDocument();
});
