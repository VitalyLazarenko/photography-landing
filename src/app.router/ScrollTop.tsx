import React from "react";
import {withRouter} from "react-router-dom";

class ScrollToTop extends React.Component {

    componentDidUpdate(prevProps: any) {
        // @ts-ignore
        const path = this.props.location.pathname;

        // switch (path.toLowerCase()) {
        //     case '/contact/:0' :
        //         document.title = `Contact | Eurotech`;
        //         break;
        //     case '/contact/:1' :
        //         document.title = `Contact | Eurotech`;
        //         break;
        //     case '/about/:0' :
        //         document.title = `About | Eurotech`;
        //         break;
        //     case '/about/:1' :
        //         document.title = `About | Eurotech`;
        //         break;
        //     case '/material/:0' :
        //         document.title = `Material | Eurotech`;
        //         break;
        //     case '/material/:1' :
        //         document.title = `Material | Eurotech`;
        //         break;
        //     case '/material/:2' :
        //         document.title = `Material | Eurotech`;
        //         break;
        //     case '/' :
        //         break;
        //     default :
        //         this.changeTitle(path);
        //         break;
        // }

        if (path !== prevProps.location.pathname && path !== '/policies' && path !== '/contact/:0') {
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    }

    // changeTitle(path: any) {
    //     const title = path.slice(1)[0].toUpperCase() + path.slice(2);
    //
    //     if (title.includes('/')) {
    //         const test = title?.split('/')[1].split('_')[0];
    //         document.title = `${test[0].toUpperCase() + test.slice(1)} | Eurotech`;
    //     } else {
    //         document.title = `${title} | Eurotech`;
    //     }
    // }

    render = (): any => {
        return null;
    };
}
// @ts-ignore
export default withRouter(ScrollToTop);