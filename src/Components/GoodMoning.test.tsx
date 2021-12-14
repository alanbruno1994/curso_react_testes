import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GoodMorning from './GoodMorning'
describe("My Group Test",()=>{// Aqui basicamente faz o agrupamento de teste
  test('Exists Good Morning' /* Aqui serve para identitifcar dada teste */, () => { //Aqui e uma funcao anonima onde fica o que vai ser testado
    render(<GoodMorning />);//Serve para rendizar o componente 
    // Aqui esta pegando um elemento da tela que rendeziado dentro dele
    //exact:true serve para pegar se existe no componente a frase exata Good Morning sem mais nada, ja com false basta que apenas exista
    //ademais se exact for true ele difrencia letra maiscula de menuscula
    const linkElement = screen.getByText('Good Morning',{exact:false});//Obtem um elemento da tela onde o aplicativo e rendizado
    //Se encontrado o elemeto na tela buscado pelo texto o teste passara
    expect(linkElement).toBeInTheDocument();
  });

  test('If button no clicked renders Enable true' /* Aqui serve para identitifcar dada teste */, () => { //Aqui e uma funcao anonima onde fica o que vai ser testado
    render(<GoodMorning />);//Serve para rendizar o componente 
    // Aqui esta pegando um elemento da tela que rendeziado dentro dele
    //exact:true serve para pegar se existe no componente a frase exata Good Morning sem mais nada, ja com false basta que apenas exista
    //ademais se exact for true ele difrencia letra maiscula de menuscula
    const linkElement = screen.getByText('Enable true',{exact:false});//Obtem um elemento da tela onde o aplicativo e rendizado
    //Se encontrado o elemeto na tela buscado pelo texto o teste passara
    expect(linkElement).toBeInTheDocument();
  });

  test('If button clicked no renders Enable true' /* Aqui serve para identitifcar dada teste */, () => { //Aqui e uma funcao anonima onde fica o que vai ser testado
    render(<GoodMorning />);//Serve para rendizar o componente 
    // Aqui serve para pegar o unico botao da tela
    const button=screen.getByRole('button')
    // Aqui faz acao de dar o click no botao
    userEvent.click(button)
    
    // Aqui esta pegando um elemento da tela que rendeziado dentro dela
    //exact:true serve para pegar se existe no componente a frase exata Good Morning sem mais nada, ja com false basta que apenas exista
    //ademais se exact for true ele difrencia letra maiscula de menuscula
    //Agora como o valor pode vir nulo usamos queryByText
    const linkElement = screen.queryByText('Enable true',{exact:false});//Obtem um elemento da tela onde o aplicativo e rendizado
    
   
    //Se nao encontrado o elemeto na tela buscado pelo texto o teste passara, pois ele sera nulo
    expect(linkElement).toBeNull()
  });

  // Nesse teste Hello World esta em componente filho de GoodMorning
  test('Testing hierarchy components' /* Aqui serve para identitifcar dada teste */, () => { //Aqui e uma funcao anonima onde fica o que vai ser testado
    render(<GoodMorning />);//Serve para rendizar o componente e componentes filhos
    // Aqui esta pegando um elemento da tela que rendeziado dentro dele
    //exact:true serve para pegar se existe no componente a frase exata Good Morning sem mais nada, ja com false basta que apenas exista
    //ademais se exact for true ele difrencia letra maiscula de menuscula
    const linkElement = screen.getByText('Hello World',{exact:false});//Obtem um elemento da tela onde o aplicativo e rendizado
    //Se encontrado o elemeto na tela buscado pelo texto o teste passara
    expect(linkElement).toBeInTheDocument();
  });



})

  