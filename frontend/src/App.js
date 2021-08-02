import { BrowserRouter,Switch,Route } from "react-router-dom";


import Header from "./componants/Header/Header";
import Home from "./componants/home/Home";
import Cart from "./componants/Cart/cart";


function App() {
  return (
    <BrowserRouter >
     <Header/>
      
      <Switch>
       
        <Route exact path='/' component={Home}/>
        <Route path='/cart' component={Cart}/>
       
       
       </Switch>
    </BrowserRouter>
  );
}

export default App;
