"use client"
import { Input, CloseButton } from '@mantine/core';
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";

interface InputSearchProps {
    searchMovie: string;
    setSearchMovie: React.Dispatch<React.SetStateAction<string>>;
}

const InputSearch = ({ searchMovie, setSearchMovie }: InputSearchProps) => {

  return (
    <Input
        placeholder="Buscar filme pelo nome"
        value={searchMovie}
        onChange={(event) => setSearchMovie(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
        <Link href={'./'+searchMovie}>
            <CloseButton
                icon={<IoIosSearch size={18} />}
                aria-label="Buscar filme"
                style={{ display: searchMovie ? undefined : 'none' }}
            />
        </Link>
        }
    />
  );
};

export default InputSearch;
