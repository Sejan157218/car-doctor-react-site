import React from 'react';

const Expert = ({expert}) => {
    const {img,name,expertize}=expert
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img src={img} alt="" />
            <h3 className="my-2">{name}</h3>
            <h3 className="text-danger">{expertize}</h3>
        </div>
    );
};

export default Expert;