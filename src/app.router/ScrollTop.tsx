import React from "react";
import {withRouter} from "react-router-dom";

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps: any) {
        // @ts-ignore
        const path = this.props.location.pathname;

        if (path !== prevProps.location.pathname && path !== '/policies') {
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    }
    render = (): any => {
        return null;
    };
}
// @ts-ignore
export default withRouter(ScrollToTop);