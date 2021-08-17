import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./componants/Header/Header";
import Home from "./componants/home/Home";
import Cart from "./componants/Cart/cart";
import { TemplateProvider } from "./template/Template";
import ContextProvider from "./context/contextProvider";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
