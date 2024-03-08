import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText : string
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
          <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} selectedGenre = {gameQuery.genre}/>
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery}/>
            <HStack spacing={5}  marginBottom={5}>
              <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectPlatform = {(platform) => setGameQuery({...gameQuery, platform})}/>
              <SortSelector sortOrder = {gameQuery.sortOrder} onSelectSortOrder = {(sortOrder) =>setGameQuery({...gameQuery,sortOrder})} />
            </HStack>
            <GameGrid gameQuery = {gameQuery} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
