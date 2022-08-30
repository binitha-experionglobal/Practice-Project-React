import React from "react";
import { Switch,Route } from "react-router-dom";
import ContactUs from "../Customer";
import Categories from "../Categories";
import Home from "../Home";
import Customer from "../Customer";
import Product from "../Product";
const Routes=()=>{
    return(
        <>
        <Switch>
            <Route exact path="/customeraccount">
                <Customer/>
            </Route>
            <Route exact path="/categories">
                <Categories/>
            </Route>
            <Route exact path="/productsearch">
                <Product/>
            </Route>
            <Route exact path="/">
                <Home/>
            </Route>
        </Switch>
        </>
    )
}
export default Routes;