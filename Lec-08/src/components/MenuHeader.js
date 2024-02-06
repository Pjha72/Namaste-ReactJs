import { useState } from "react";
const MenuHeader = (props) =>{
    const {menu} = props;
    return (
        <>
         <h1>{menu.name}</h1>
         <h2>{menu.category}</h2>
         <h3>{menu.description}</h3>
        </>
    )
}

export default MenuHeader;