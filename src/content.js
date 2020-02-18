import React from "react";

import './App.css';

const Content = () => {
    return (
        <div className="container min-vh-100">
            <div className="row">
                <div className="col-sm-12 col-md-5 embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/_fukPhgbz7o" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className="col-sm-12 col-md-5 ml-auto embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/3MRnzr7XZ1w" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>

            </div>

              </div>

    );
};

export default Content;