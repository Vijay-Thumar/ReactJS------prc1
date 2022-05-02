import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
// import AllQuotes from "./components/pages/AllQuotes";
// import NewQuotes from "./components/pages/NewQuotes";
// import QuoteDetails from "./components/pages/QuoteDetails";
import AllUsers from './components/pages/AllUsers';
import {SignupFormik} from './components/pages/SignupFormik';

function App() {
  return (
  //  <Switch>
  //    <Route path='/' exact> <Redirect to='/quotes'/></Route>
  //    <Route path='/quotes' exact> <AllQuotes/> </Route>
  //    <Route path='/quotes/:quoteId'><QuoteDetails/></Route>
  //    <Route path='/new-quote'><NewQuotes/></Route>
  //  </Switch>
    <Switch>
      <Route path='/' exact> <Redirect to='/signup' /></Route>
      <Route path='/signup' exact> <SignupFormik /> </Route>
      <Route path='/allusers' exact ><AllUsers /></Route>
    </Switch>
  );
}

export default App;
