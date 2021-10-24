import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service, setService] = useState([]);
    const { bookinID } = useParams();

    const url = `http://localhost:9000/services/${bookinID}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <h1>bokking {bookinID}</h1>


            <div className="service-container pb-3">
                <img src={service?.img} alt="" />
                <h3>{service?.name}</h3>
                <h3>Price : {service?.price}</h3>
                <p>{service?.desc}</p>

            </div>
        </div>
    );
};

export default Booking;