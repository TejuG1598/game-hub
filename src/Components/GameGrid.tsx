import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, errors, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid spacing={10} padding = {10} columns = {{sm: 1, md : 2, lg: 3}}>
        {isLoading && Skeletons.map( (skeleton) => <GameCardSkeleton key = {skeleton}/>)}
        {games && games.map((game) => <GameCard key={game.id} game = {game}/>)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
