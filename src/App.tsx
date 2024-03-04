import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./Components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

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
            <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre = {selectedGenre}/>
          </GridItem>
        </Show>

        <GridItem area="main">
          <PlatformSelector/>
          <GameGrid selectedGenre = {selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
