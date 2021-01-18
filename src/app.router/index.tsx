import React, {useEffect} from "react";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Routes from "./router.constants";
import {useDispatch, useSelector} from "react-redux";

import {HomePage, AboutPage, PricePage} from "../pages";
import {Footer, HeaderComponent} from "../components";
import {changeControls} from "../redux/action.creators/app.actions";
import {loadingSelector} from "../redux/app.module";

const AppRouter: React.FC = () => {
    const dispatch = useDispatch();
    const loading = useSelector(loadingSelector);

    useEffect(() => {
        dispatch(changeControls({name: "loading", value: !loading}));
    },[]);

    console.log('loading', loading);

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
