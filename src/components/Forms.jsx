import React, { useState } from 'react'

const Forms = () => {
    const [inputVal, setInputVal] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        occupation: "",
    });

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInputVal((preValue) => {
            return {
                ...preValue,
                [name] : value,
            }
        })
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Forms Is Submited");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container mt-5">
                    <input 
                        type="text"
                        placeholder="Enter First Name"
                        className="form-control w-25"
                        name="fName"
                        onChange={handleInput}
                        value={inputVal.fName}
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Enter Last Name"
                        className="form-control w-25"
                        name="lName"
                        onChange={handleInput}
                        value={inputVal.lName}
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Enter Your Email"
                        className="form-control w-25"
                        name="email"
                        onChange={handleInput}
                        value={inputVal.email}
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Enter Phone Number"
                        className="form-control w-25"
                        name="phone"
                        onChange={handleInput}
                        value={inputVal.phone}
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Enter Your Occupation"
                        className="form-control w-25"
                        name="occupation"
                        onChange={handleInput}
                        value={inputVal.occupation}
                    />
                    <br />
                <button type="submit" className="btn-outline-danger border-2 fw-bold">
                    Submit
                </button>
                </div>
            </form>
        </>
    )
}

export default Forms;
