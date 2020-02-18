import React from "react";

import './App.css';

const Content = () => {
    return (
        <div className=" min-vh-100 content">
            <div className="container">
             <div className="row">
                <div className="video col-sm-12 col-md-5 embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/KjcLvKeiKq8" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className="video col-sm-12 col-md-5 ml-auto embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/4ql1bHBNVks" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>

             </div>
            </div>

        </div>

    );
};

export default Content;