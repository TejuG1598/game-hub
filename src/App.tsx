import {  Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid templateAreas={`"nav   nav" 
                            "aside main"`}>
        <GridItem area = "nav" bg ="blueviolet">
            NavBar
        </GridItem>
        <GridItem area = "aside" bg = "greenyellow">
            Aside Panel 
        </GridItem>
        <GridItem area = "main" bg = "goldenrod">
            Main Area
        </GridItem>
        
      </Grid>
    </>
  );
}

export default App;
