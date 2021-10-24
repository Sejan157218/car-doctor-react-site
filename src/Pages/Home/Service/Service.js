import React from 'react';
import { Link } from 'react-router-dom';
import "./service.css"

const Service = ({ service }) => {
    // {service} = props
    const { name, price, desc, img, _id } = service;
    return (
        <div className="service-container pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3>Price : {price}</h3>
            <p>{desc}</p>
            <Link to={`booking/${_id}`}>
                <button className="btn-danger">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;