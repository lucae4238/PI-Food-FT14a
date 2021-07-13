import { Route, Switch } from "react-router";
import "./App.css";
import Form from "./Form/Form";
import GetStarted from "./GetStarted";
import { Home } from "../Visual/Home/Home";
import DetailsRecipes from "./Details/DetailsRecipesMain";
// import Top from "./Top";
import Errorhandler from "./Errorhandler";


function App() {
  return (
    <>
      {/* <Route path="/" component={Top} /> */}
      <Switch>
      <Route exact path="/" component={GetStarted}/>
      <Route exact path="/home" component={Home} />
      <Route path="/makeRecipe" component={Form} />
      <Route path='/recipe/:id' component={DetailsRecipes} />
      <Route component={Errorhandler} />
      </Switch>
    </>
  );
}

export default App;
