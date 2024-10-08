import React, {useEffect} from "react";
import { useLoaderData } from "react-router-dom";
import CharacterDetail from '../components/CharacterDetail';

const CharacterDetailPage = () => {
  const { character } = useLoaderData();
  useEffect(() => {
    document.title = `Character: ${character.name} | Marvel App`;
  }, [character]);
  return (
    <>
    <CharacterDetail character={character} />
    </>
  );
}