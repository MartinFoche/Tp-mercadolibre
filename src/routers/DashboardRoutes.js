import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Redirect, Route, Switch } from "react-router-dom";
export const DashboardRoutes = () => {

    return (
        <>
          <div className="container-fluid sin-padding">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/product/detail/:id" component={Detail} />
              <Redirect to="/" />
            </Switch>
          </div>
        </>
      );
}