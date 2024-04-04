"use client"

import { useEffect, useState } from 'react';
import { Container, ListMovies, Movies } from "./styles";

import Loader from "@/components/Loader";
import ReloadPage from "@/components/RealodPage";
import CardMovie from '@/components/CardMovie';
import { GlobalMovieProps } from '@/@types/movie-type';
import InputSearch from '../Components/InputSearch';
import { useRouter } from 'next/navigation';

const URL_API = 'http://localhost:3001/products';

interface MovieSearchPageProps {
    params: {
      movie: string;
    };
  }

const MovieSearch = ({ params: { movie }}: MovieSearchPageProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchMovie, setSearchMovie] = useState(decodeURI(movie));
  const [movies, setMovies] = useState<GlobalMovieProps[]>([]);

  const router = useRouter();

  const removeAccents = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  }
  
  const filterByName = (movie: GlobalMovieProps, term: string): boolean => {
    const titleWithoutAccents = removeAccents(movie.title.toLowerCase());
    const termWithoutAccents = removeAccents(term.toLowerCase());
    return titleWithoutAccents.includes(termWithoutAccents);
  }

  const fetchAllData = async () => {
    try{
      setLoading(true);
      setError(false);

      const response = await fetch(URL_API, {method: 'GET'});
      const data = await response.json();

      if(!data){
        throw "Erro";
      }else{
        const filteredMovies = data.filter((movieItem: GlobalMovieProps) => filterByName(movieItem, searchMovie));
        setMovies(filteredMovies);
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

  useEffect(() => {
    if(searchMovie == ""){
      router.push('/');
    }
  }, [searchMovie]);


  return (
    <Container>
      {loading && <Loader />}

      {(error && movies.length <= 0) && <ReloadPage reload={false}/>}

      {(!loading && !error && movies) && 
      <Movies>
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

export default MovieSearch;