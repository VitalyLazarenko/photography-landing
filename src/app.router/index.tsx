import React, {useEffect, useLayoutEffect} from "react";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Routes from "./router.constants";
import {useDispatch, useSelector} from "react-redux";

import {HomePage, AboutPage, PricePage} from "../pages";
import {Footer, HeaderComponent} from "../components";
import {changeControls, fetchLanding} from "../redux/action.creators/app.actions";
import {
    aboutMeSelector,
    avatarSelector,
    loadingSelector,
    packagesSelector, portfolioSelector,
    videoHomePageSelector
} from "../redux/app.module";

const AppRouter: React.FC = () => {
    const dispatch = useDispatch();
    const loading = useSelector(loadingSelector);
    const avatar = useSelector(avatarSelector);
    const aboutMe = useSelector(aboutMeSelector);
    const videoHomePage = useSelector(videoHomePageSelector);
    const packages = useSelector(packagesSelector);
    const portfolio = useSelector(portfolioSelector);

    useLayoutEffect(() => {
        dispatch(changeControls({name: "loading", value: !loading}));
        dispatch(fetchLanding());
    },[]);

    useEffect(() => {
        console.log('result Router', {
            avatar: avatar,
            aboutMe: aboutMe,
            videoHomePage: videoHomePage,
            packages: packages,
            portfolio: portfolio,
        })
    }, [avatar, aboutMe, videoHomePage, packages, portfolio]);

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
