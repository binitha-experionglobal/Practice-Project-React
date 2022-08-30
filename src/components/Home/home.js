import React from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <>
        <b>Home Page</b><br/><br/>
        <Link to ="customeraccount">Create Account</Link><br/>
        <Link to ="categories">Categories</Link><br/>
        <Link to ="productsearch">Search</Link>
        </>
    )
}
export default Home;