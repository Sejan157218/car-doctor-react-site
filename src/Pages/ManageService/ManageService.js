import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([]);
    const [deleteservice, setDeleteservice] = useState(false)

    useEffect(() => {
        fetch('https://agile-crag-74630.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [deleteservice]);

    const handlerToDelete = id => {
        const proceed = window.confirm('Are Sure to delete');
        if (proceed) {
            axios.delete(`https://agile-crag-74630.herokuapp.com/services/${id}`)
                .then(res => {
                    setDeleteservice(res.data.deletedCount)
                })
        }
    }
    return (
        <div id="services">
            <h1 className="text-danger my-5">Our Services</h1>
            <div className="services-container">

                {
                    services.map(service =>

                    (
                        <div className="service-container pb-3">
                            <img src={service?.img} alt="" />
                            <h3>{service?.name}</h3>
                            <h3>Price : {service?.price}</h3>
                            <p>{service?.desc}</p>
                            <button onClick={() => handlerToDelete(service?._id)} className="btn-danger">Delete Service</button>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    );
};

export default ManageService;