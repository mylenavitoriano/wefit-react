"use client"

import { useEffect, useState } from 'react';
import { Container, ListMovies, Movies } from "./styles";
import { Input, CloseButton } from '@mantine/core';
import { IoIosSearch } from "react-icons/io";

import Loader from "@/components/Loader";
import ReloadPage from "@/components/RealodPage";
import CardMovie from '@/components/CardMovie';
import { GlobalMovieProps } from '@/@types/movie-type';

const URL_API = 'http://localhost:3001/products'

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState<GlobalMovieProps[]>([]);

  const fetchAllData = async () => {
    try{
      setLoading(true);
      setError(false);

      const response = await fetch(URL_API, {method: 'GET'});
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

  console.log(error, movies);

  const handleSearchClick = () => {
    console.log(searchMovie);
  };

  return (
    <Container>
      {loading && <Loader />}

      {(error && movies.length <= 0) && <ReloadPage reload={true}/>}

      {(!loading && !error && movies) && 
      <Movies>
        <Input
          placeholder="Buscar filme pelo nome"
          value={searchMovie}
          onChange={(event) => setSearchMovie(event.currentTarget.value)}
          rightSectionPointerEvents="all"
          mt="md"
          rightSection={
            <CloseButton
              icon={<IoIosSearch size={18} />}
              aria-label="Buscar filme"
              onClick={handleSearchClick}
              style={{ display: searchMovie ? undefined : 'none' }}
            />
          }
        />

        <ListMovies>
          {movies && movies.map((item) => (
            <CardMovie movie={item} key={item.id}/>
          ))}
        </ListMovies>
        
        
      </Movies>}
    </Container>
  );
}
