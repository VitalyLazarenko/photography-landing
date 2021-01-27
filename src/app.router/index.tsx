import React, {useLayoutEffect} from "react";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Routes from "./router.constants";
import {useDispatch, useSelector} from "react-redux";

import {HomePage, AboutPage, PricePage, SeriesPage} from "../pages";
import {Footer, HeaderComponent, PhotoPopup} from "../components";
import {fetchLanding} from "../redux/action.creators/app.actions";
import {seriesSelector} from "../redux/app.module";
import ScrollToTop from "./ScrollTop";
import {PortfolioPage} from "../pages/Portfolio.page/PortfolioPage";
import {Series} from "../types";

const AppRouter: React.FC = () => {
    const dispatch = useDispatch();
    const series = useSelector(seriesSelector);

    useLayoutEffect(() => {
        dispatch(fetchLanding());
    }, [dispatch]);

    const renderSeries = () =>
        series && series.map((series: Series) => {
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
                <Route path={Routes.PortfolioPage} component={PortfolioPage}/>
                {
                    series && renderSeries()
                }
            </Switch>
            <Footer/>
        </Router>
    );
};

export default AppRouter;
