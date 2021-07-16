import { Route, Switch } from "react-router";
import "./App.css";
import Form from "./Form/Form";
import GetStarted from "./GetStarted";
import { Home } from "../Visual/Home/Home";
import DetailsRecipes from "./Details/DetailsRecipesMain";
// import Top from "./Top";
import Errorhandler from "./Errorhandler";
import { ThemeProvider } from "styled-components";



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>

    
      {/* <Route path="/" component={Top} /> */}
      <Switch>
      <Route exact path="/" component={GetStarted}/>
      <Route exact path="/home" component={Home} />
      <Route path="/makeRecipe" component={Form} />
      <Route path='/recipe/:id' component={DetailsRecipes} />
      <Route component={Errorhandler} />
      </Switch>
      </ThemeProvider>
    </>
  );
}


const theme = {
  glassWhite: 'rgb(255, 255, 255, 0.35)',
  glassTransparent: 'rgba(255, 255, 255, 0.35)',
  glassBorder: '1px solid rgba(255, 255, 255, 0.18)',
  darkBorder: '1px solid rgba(55, 55, 55)',
  glassBorderRadius:`10px`,
  hoverShadow:'0 5px 15px rgba(0, 0, 0, 0.3)'
}

export default App;
