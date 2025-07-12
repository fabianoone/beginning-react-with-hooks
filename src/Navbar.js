import React from "react";
import { UserContext } from "./index";

function NavBar() {
    return (
        <UserContext.Consumer>
            {value => <div>Received, {value}</div>}
        </UserContext.Consumer>
    );
}

export default NavBar;
