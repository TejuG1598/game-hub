import {  Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

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
        <GridItem area = "aside" bg = "greenyellow">
            Aside Panel 
        </GridItem>
        </Show>
        
        <GridItem area = "main" bg = "goldenrod">
            Main Area
        </GridItem>
        
      </Grid>
    </>
  );
}

export default App;
