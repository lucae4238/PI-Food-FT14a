import { Route } from "react-router";
import "./App.css";
import Form from "./Form";
import GetStarted from "./GetStarted";
import { Home } from "./Home";
import DetailsRecipes from "./Recipes/DetailsRecipes";
import Top from "./Top";


function App() {
  return (
    <>
      <Route path="/" component={Top} />
      <Route exact path="/" component={GetStarted}/>
      <Route exact path="/home" component={Home} />
      <Route path="/makeRecipe" component={Form} />
      <Route path='/recipe/:id' component={DetailsRecipes} />
    </>
  );
}

export default App;
