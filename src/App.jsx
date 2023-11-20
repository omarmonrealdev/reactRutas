import { Grid, GridItem } from "@chakra-ui/react"
import MainGridNav from "./components/MainGridNav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetails from "./components/ProductDetails"
import NotFound from "./components/NotFound"


function App() {
  return (
    <Grid templateAreas={{
      base: `"main"`,
      lg: `"main"`,
    }}>
      <BrowserRouter>
        <GridItem area='main'>
          <Routes>
            <Route path="/" exact element={
              <MainGridNav />
            }/>

            <Route path="/details/:id" element={
              <ProductDetails />
            }/>

            <Route path="*" element={
              <NotFound />
            }/>
          </Routes>
        </GridItem>
      </BrowserRouter>
    </Grid>
  )
}

export default App
