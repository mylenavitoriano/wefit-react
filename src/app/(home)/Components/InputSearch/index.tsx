"use client"
import { Input, CloseButton } from '@mantine/core';
import { IoIosSearch } from "react-icons/io";

interface InputSearchProps {
    searchMovie: string;
    setSearchMovie: React.Dispatch<React.SetStateAction<string>>;
    handleSearchClick: () => void;
}

const InputSearch = ({ searchMovie, setSearchMovie, handleSearchClick }: InputSearchProps) => {

  return (
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
  );
};

export default InputSearch;
