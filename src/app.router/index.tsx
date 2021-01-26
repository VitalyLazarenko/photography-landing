import React, {useEffect, useLayoutEffect} from "react";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Routes from "./router.constants";
import {useDispatch, useSelector} from "react-redux";

import {HomePage, AboutPage, PricePage, SeriesPage} from "../pages";
import {Footer, HeaderComponent, PhotoPopup} from "../components";
import {fetchLanding} from "../redux/action.creators/app.actions";
import {
    aboutMeSelector,
    avatarSelector,
    packagesSelector, portfolioSelector,
    videoHomePageSelector
} from "../redux/app.module";
import ScrollToTop from "./ScrollTop";
import {PortfolioPage} from "../pages/Portfolio.page/PortfolioPage";
import {Series} from "../types";

const AppRouter: React.FC = () => {
    const dispatch = useDispatch();
    const avatar = useSelector(avatarSelector);
    const aboutMe = useSelector(aboutMeSelector);
    const videoHomePage = useSelector(videoHomePageSelector);
    const packages = useSelector(packagesSelector);
    const portfolio = useSelector(portfolioSelector);

    useLayoutEffect(() => {
        dispatch(fetchLanding());
    }, [dispatch]);

    useEffect(() => {
        console.log('STATE IN ROUTER:', {
            avatar: avatar,
            aboutMe: aboutMe,
            videoHomePage: videoHomePage,
            packages: packages,
            portfolio: portfolio,
        })
    }, [avatar, aboutMe, videoHomePage, packages, portfolio]);

    const renderSeries = () =>
        portfolio && portfolio.map((series: Series) => {
            const SeriesComponent: React.FC = () => <SeriesPage/>;
            return (
                <React.Fragment key={series._id}>
                    <Route
                        exact
                        path={`${Routes.SeriesPage}/:sid`}
                        component={SeriesComponent}
                    />
                </React.Fragment>
            );
        });


    return (
        <Router>
            <ScrollToTop/>
            <HeaderComponent/>
            <PhotoPopup/>
            <Switch>
                <Route exact path={Routes.HomePage} component={HomePage}/>
                <Route path={Routes.PricePage} component={PricePage}/>
                <Route path={Routes.AboutPage} component={AboutPage}/>
                {/*<Route path={Routes.SeriesPage} component={SeriesPage}/>*/}
                <Route path={Routes.PortfolioPage} component={PortfolioPage}/>
                {
                    portfolio && renderSeries()
                }
            </Switch>
            <Footer/>
        </Router>
    );
};

export default AppRouter;
