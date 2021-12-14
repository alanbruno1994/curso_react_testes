import { render ,screen} from "@testing-library/react"
import AsyncComponent from "./AsyncComponent"


describe("Testes async",()=>{// Dentro de um agrupamento pode acontecer de um teste interfeir em outro

    test("Testing data async",async ()=>{
        render(<AsyncComponent/>)// Aqui renderiza o componente e seus componentes filhos
        //Metodos que comecam com find sao assincrones, no caso findAllByRole serve para pegar tags
        const listItem= await screen.findAllByRole('listitem',{},{timeout:3000})//aqui espera que depois de 3 segundas exista uma lista de tags li
        expect(listItem).not.toHaveLength(0)// Aqui testa se existe pelo menos um elemento

    })

})

describe("Tests async mock",()=>{


    //Esse teste vai mocar os dados ou seja, nao ira fazer uma real consulta a uma api isso traz a vantagem claro de nao ficar
    //gerando trafego no servidor por causa de testes 
    test("Testing data async mock",async ()=>{
        //Aqui esta mocando ou seja marrentando um valor em fech para que nao precisa fazer uma consulta real
        jest.spyOn(window, 'fetch').mockImplementationOnce(async (): Promise<any> => Promise.resolve({ json: async () => Promise.resolve({results:[{  episode_id: 1,
            title: 'xxx',      
            release_date: '01/12/2020'}]})}))    
        render(<AsyncComponent/>)// Aqui renderiza o componente e seus componentes filhos          
        //Metodos que comecam com find sao assincrones, no caso findAllByRole serve para pegar tags
        const listItem= await screen.findAllByRole('listitem',{})//aqui espera que depois de 3 segundas exista uma lista de tags li
        expect(listItem).not.toHaveLength(0)// Aqui testa se existe pelo menos um elemento

    })
})