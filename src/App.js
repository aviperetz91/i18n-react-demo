import { Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Nav from "./Nav";
import Home from "./Home";
import Page2 from "./Page2";
import Footer from "./Footer";

const App = () => {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div className="app">
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page2" component={Page2} />
        </Switch>
        <hr className="mt-5"></hr>
        <Footer />
      </div>
    </div>
  );
};

export default App;
