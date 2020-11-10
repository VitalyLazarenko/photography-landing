import React from "react";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Routes from "./router.constants";
import {HomePage} from "../pages/Home.page/Home";
import {PricePage} from "../pages/Price.page/Price";
import {AboutPage} from "../pages/About.page/About";
import {HeaderComponent} from "../components/Header.component/Header";
import {Footer} from "../components/Footer.component/Footer";

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
