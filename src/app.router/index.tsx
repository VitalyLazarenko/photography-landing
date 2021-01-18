import React from "react";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Routes from "./router.constants";
import {HomePage} from "../pages";
import {PricePage} from "../pages";
import {AboutPage} from "../pages";
import {Footer, HeaderComponent} from "../components";

const AppRouter: React.FC = () => {

    return (
        <Router>
            <HeaderComponent/>
            <Switch>
                <Route exact path={Routes.HomePage} component={HomePage}/>
                <Route path={Routes.PricePage} component={PricePage}/>
                <Route path={Routes.AboutPage} component={AboutPage}/>
            </Switch>
            <Footer/>
        </Router>
    );
};

export default AppRouter;
