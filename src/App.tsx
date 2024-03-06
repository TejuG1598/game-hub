import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  
const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: `'1fr'`,
          lg: `'250px' '1fr'`
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} selectedGenre = {gameQuery.genre}/>
          </GridItem>
        </Show>

        <GridItem area="main">
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectPlatform = {(platform) => setGameQuery({...gameQuery, platform})}/>
            <SortSelector sortOrder = {gameQuery.sortOrder} onSelectSortOrder = {(sortOrder) =>setGameQuery({...gameQuery,sortOrder})} />
          </HStack>
          <GameGrid gameQuery = {gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
