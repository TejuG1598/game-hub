import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => {
        console.log(response.data); // Log the response data to ensure it's what you expect
        if (response.data && response.data.results) {
          setGames(response.data.results);
        }
      })
      .catch((error) => {
        setErrors(error.message);
        console.error(error); // Log any error encountered during the API call
      });
  }, []);
  
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <ul>
        {games && games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
