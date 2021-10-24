import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../images/404.jpg"

const NotFound = () => {
    return (
        <div >
            <img style={{height:'35rem'}} className="w-100" src={img} alt="" />
            <Link to="/home">
            <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;