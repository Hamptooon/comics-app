import { useState, useEffect } from "react";
import getCharacters from "../../domain/usecases/characters/getCharacters";

export default function useCharacters() {
  const [characters, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      const characterList = await getCharacters();
      setCharacter(characterList);
      setLoading(false);
    }
    fetchCharacters();
  }, []);

  return { characters, loading };
}
