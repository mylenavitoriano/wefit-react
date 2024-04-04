"use client"

import { useEffect, useState } from 'react';
import { Container, ListMovies, Movies } from "./styles";

import Loader from "@/components/Loader";
import ReloadPage from "@/components/RealodPage";
import CardMovie from '@/components/CardMovie';
import { GlobalMovieProps } from '@/@types/movie-type';
import InputSearch from './Components/InputSearch';



export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState<GlobalMovieProps[]>([]);
  const [API, setAPI] = useState('');

  const fetchAllData = async () => {
    try{
      let URI_API = '';
      setLoading(true);
      setError(false);

      if (typeof window !== 'undefined') {
        const hostname = window.location.hostname;
        URI_API = 'http://'+hostname+':3001/products';
        setAPI(URI_API);
      }

      const response = await fetch(URI_API, {method: 'GET'});
      const data = await response.json();

      if(!data){
        throw "Erro";
      }else{
        setMovies(data);
      }
    } catch (error){
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    

    fetchAllData();
  }, []);


  return (
    <Container>
      {loading && <Loader />}

      {(error && movies.length <= 0) && <ReloadPage reload={true}/>}

      {(!loading && !error && movies) && 
      <Movies>
      <p>{API}</p>
        <InputSearch searchMovie={searchMovie} setSearchMovie={setSearchMovie} />

        <ListMovies>
          {movies && movies.map((item) => (
            <CardMovie movie={item} key={item.id}/>
          ))}
        </ListMovies>
        
        
      </Movies>}
    </Container>
  );
}
