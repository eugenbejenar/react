import React from 'react';
import './App.css';
import Header from "./Header";
import Content from "./content";
import FooterPage from "./footer";




const App = () => {
    return(
        <div className="first-page">
         <div className="header">
             <Header/>
         </div>
            <div className="content">
                <Content/>
            </div>
            <div className="footer">
                <FooterPage/>
            </div>




        </div>

         );

};


export default App ;

