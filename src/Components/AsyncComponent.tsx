import { useCallback, useEffect, useState } from 'react';
import Movie from './Movie';


type Film={
  id:number
  title:string
  releaseDate:string
}

function AsyncComponent() {
  const [loading,setLoading]=useState(false)
  const [films,setFilms]=useState<Film[]>([])

  //Aqui usei useCallback para evitar um loop na hora monitorar no useEffect
  const findFilms= useCallback(async ()=>{
    setLoading(true)//Aqui incia o carregamento
    const response= await fetch('https://swapi.dev/api/films/')   
    const data= await response.json()      
    const filmsList = data.results.map((movieData:any) => {     
      return {
        id: movieData.episode_id,
        title: movieData.title,      
        releaseDate: movieData.release_date,
      };
    });
    setFilms(filmsList);    
    setLoading(false)//Aqui termina o carregamento
  },[])

  useEffect(()=>{
    findFilms()
  },[findFilms])

  function generateFilms(){
    if(!loading && films.length===0){
      return <>Not found movies</>
    }else if(loading)
    {
      return <>Loading...</>
    }
    
    return <ul>{films.map((value:Film)=><Movie key={value.id} title={value.title} releaseData={value.releaseDate}/>)}</ul>

  }

 
  return (
    <div className="App">
      <button onClick={findFilms}>Fetch</button>
      {generateFilms()}
    </div>
  );
}

export default AsyncComponent;