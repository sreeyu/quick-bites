import React, { Fragment} from "react";
import MenuSummary from "./MenuSummary";
import MenuItems from "./MenuItems";

function Menu(){
    return(
        <Fragment>
            <MenuSummary />
            <MenuItems />
        </Fragment>
    );
};

export default Menu;