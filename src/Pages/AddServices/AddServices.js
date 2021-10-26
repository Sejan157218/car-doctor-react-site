import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddServices.css";

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        axios.post('https://agile-crag-74630.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Services added");
                    e.target.reset();
                }
            })
    };
    return (
        <div className="add-user">
            <h1>Please add services</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="name" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img",)} placeholder="image URL" />
                <textarea {...register("desc",)} placeholder="description" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;