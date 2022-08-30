import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import GET_CATEGORIES from "./categories.gql"


const RecursiveComponent = ({ name,children }) => {
    return (
        <> 
            {name}
           <div className="level" style={{ 'padding-left': '20px' }}>
           {children.map((item) => (
                <RecursiveComponent  {...item} />                
            ))}
            </div>
        </>
    )
}


const Categories = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    console.log(data);
    // console.log("check" + data.categoryList[0].name);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <>
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <div className='title'>Category page</div><br /><br />
            <RecursiveComponent {...data.categoryList[0]} />
        </>
    )
}
export default Categories;