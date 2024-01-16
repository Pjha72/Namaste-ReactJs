import React from 'react';
import ReactDOM from 'react-dom/client';
// Default Import
import Header from './components/Header';
// Named Import
import {Title} from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
/**
             * Header
               - Logo
               - NavItems(RightSide)
               - Cart
             * Body
               - Search Bar
               - Restaurant List
                - Restaurant Card(many cards)
                    - Image
                    - Description
                    - Price
                    - Rating
                    - Cusines

             * Footer
                - Link
                - CopyRight
*/

const AppLayout = () =>{
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
/** When render the React element Used This Syntax */
// root.render(head);

/** When Render the React Component */
root.render(<AppLayout />);