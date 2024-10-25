import { useState, useEffect } from "react";
import getComics from "../../domain/usecases/comics/getComics";

export default function useComics() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComics() {
      const comicsList = await getComics();
      setComics(comicsList);
      setLoading(false);
    }
    fetchComics();
  }, []);

  return { comics, loading };
}
