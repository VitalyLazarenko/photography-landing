import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./router.constants";

import { loadingSelector as appLoading } from "../redux/modules/app.module";

import { changeControls } from "../redux/modules/action.creators/app.actions";
import Model from "../types/Model";
import Adjustment from "../types/Adjustment";

import Homepage from "../pages/homepage/homepage.container";
import Customizer from "../pages/customizer/customizer.container";

import { RaynorGroup } from "../pages/raynor";
import { Intro } from "../pages/intro";
import Header from "../components/header.component";
import { AssetsLoader } from "../components/assets.loader";
import Seating from "../types/Seating";
import { Categories } from "../pages/categories";
import { Product } from "../pages/product";
import { ContactPage } from "../pages/contact";
import { AboutPage } from "../pages/about";
import { MaterialsPage } from "../pages/materials";
import { PoliciesPage } from "../pages/policies";
import { PrivacyPolicy } from "../pages/privacy";
import ScrollToTop from "./ScrollTop";

const AppRouter: React.FC = () => {
  const dispatch = useDispatch();

  const loading = useSelector(appLoading);
  const sequence = useSelector(sequenceSelector);
  const seatings = useSelector(seatingsSelector);
  const seating = useSelector(seatingSelector);
  const model = useSelector(modelSelector);
  const adjustment = useSelector(adjustmentSelector);

  React.useEffect(() => {
    if (!sequence && !seating) {
      dispatch(changeControls({ name: "loading", value: true }));
      dispatch(fetchDesign());
    }
  }, []);

  React.useEffect(() => {
    //TODO Note: after select seating fetch models and build Model instances
    if (seating)
      dispatch(fetchEntries(seating.entries, "models", { class: Model }));
  }, [seating]);

  React.useEffect(() => {
    //TODO Note: after select model fetch modifications and build Adjustment instances
    if (model)
      dispatch(
        fetchEntries(model.entries, "adjustments", { class: Adjustment })
      );
  }, [model]);

  React.useEffect(() => {
    if (adjustment) {
      setTimeout(() => {
        dispatch(changeControls({ name: "loading", value: false }));
      }, 2000);
    }
  }, [adjustment]);

  const renderCategories = () =>
    seatings.map((seating: Seating) => {
      const Category: React.FC = () => <Categories seating={seating} />;
      const Details: React.FC = () => <Product seating={seating} />;
      return (
        <React.Fragment key={seating.id}>
          <Route
            exact
            path={`/${seating.title.toLowerCase()}`}
            component={Category}
          />
          <Route
            exact
            path={`/${seating.title.toLowerCase()}/:title`}
            component={Details}
          />
        </React.Fragment>
      );
    });

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path={Routes.Intro} component={Intro} />
        {loading ? (
          <Route
            path={"*"}
            children={() => {
              return <AssetsLoader />;
            }}
          />
        ) : (
          <React.Fragment>
            <Header />
            <Route path={Routes.Homepage} component={Homepage} />
            <Route path={`${Routes.Contact}/:anchor`} component={ContactPage} />
            <Route path={`${Routes.About}/:anchor`} component={AboutPage} />
            <Route
              path={`${Routes.Material}/:anchor`}
              component={MaterialsPage}
            />
            {/*<Route path={Routes.RaynorGroup} component={RaynorGroup}/>*/}
            <Route path={Routes.PoliciesPage} component={PoliciesPage} />
            <Route path={Routes.PrivacyPolicy} component={PrivacyPolicy} />
            {seatings && renderCategories()}
            <Route path={Routes.Customizer} component={Customizer} />
          </React.Fragment>
        )}
      </Switch>
      {seatings && seatings.length
        ? seatings.map((el: Seating, index: number) => {
            return (
              <div key={index} style={{ display: "none" }}>
                <img src={`https:${el!.thumbnail}`} />
                <img src={`https:${el!.angle_thumbnail}`} />
              </div>
            );
          })
        : null}
    </Router>
  );
};

export default AppRouter;
