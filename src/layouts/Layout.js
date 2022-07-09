import {Outlet} from "react-router-dom";

import {Header} from "../components/header/Header";

const Layout = () => {
    return (
        <div>
            <Header/>
            <h2>Please here is your information</h2>
            <Outlet/>

        </div>
    );
};

export {Layout};