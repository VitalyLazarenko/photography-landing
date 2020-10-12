import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import { loadingSelector } from "../redux/app.module";

import ScrollToTop from "./ScrollTop";

const AppRouter: React.FC = () => {

  // const loading = useSelector(loadingSelector);

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        {/*<Route exact path={Routes.Intro} component={Intro} />*/}
        {/*{loading ? (*/}
        {/*  <Route*/}
        {/*    path={"*"}*/}
        {/*    children={() => {*/}
        {/*      return <AssetsLoader />;*/}
        {/*    }}*/}
        {/*  />*/}
        {/*) : (*/}
        {/*  <React.Fragment>*/}
        {/*    <Header />*/}
        {/*    <Route path={Routes.Homepage} component={Homepage} />*/}
        {/*    <Route path={`${Routes.Contact}/:anchor`} component={ContactPage} />*/}
        {/*    <Route path={`${Routes.About}/:anchor`} component={AboutPage} />*/}
        {/*    <Route*/}
        {/*      path={`${Routes.Material}/:anchor`}*/}
        {/*      component={MaterialsPage}*/}
        {/*    />*/}
        {/*    /!*<Route path={Routes.RaynorGroup} component={RaynorGroup}/>*!/*/}
        {/*    <Route path={Routes.PoliciesPage} component={PoliciesPage} />*/}
        {/*    <Route path={Routes.PrivacyPolicy} component={PrivacyPolicy} />*/}
        {/*    {seatings && renderCategories()}*/}
        {/*    <Route path={Routes.Customizer} component={Customizer} />*/}
        {/*  </React.Fragment>*/}
        {/*)}*/}
      </Switch>
    </Router>
  );
};

export default AppRouter;
