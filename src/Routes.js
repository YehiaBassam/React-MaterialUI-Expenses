import { Switch, Route } from "react-router-dom";
import MainLayout from "./pages/Layout/MainLayout";
import Home from "./pages/Home";
import Create from "./pages/Create";

const Routes = () => {
  return (
    <>
      <MainLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Create">
            <Create />
          </Route>
        </Switch>
      </MainLayout>
    </>
  );
};

export default Routes;
