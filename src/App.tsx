import {  Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";

function App() {
  return (
    <>
      <Grid templateAreas={
        {
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }
      }>
        <GridItem area = "nav" >
            <NavBar/>
        </GridItem>
        <Show above= 'lg'>
        <GridItem area = "aside">
            Aside Panel 
        </GridItem>
        </Show>
        
        <GridItem area = "main">
            <GameGrid/>
        </GridItem>
        
      </Grid>
    </>
  );
}

export default App;
