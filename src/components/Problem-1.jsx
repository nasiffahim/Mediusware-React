import React, { useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');

    const handleClick = (val) => {
        setShow(val);
    }
    const [nameInput, setNameInput] = useState("")
    const [statusInput, setStatusInput] = useState("")
    const [activeData, setActiveData] = useState([])
    const [completedData, setCompletedData] = useState([])
    const [otherData, setOtherData] = useState([])

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const data = {
            name: nameInput,
            status: statusInput
        }
        setNameInput("")
        setStatusInput("")
        if (statusInput === "active") {
            setActiveData(old => [...old, data])
        }
        else if (statusInput === "completed") {
            setCompletedData(old => [...old, data])
        }
        else
            setOtherData(old => [...old, data])
    }


    const onNameInputChangeHandler = (event) => {
        setNameInput(event.target.value);
    }

    const onStatusInputChangeHandler = (event) => {
        setStatusInput(event.target.value);
    }


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" value={nameInput} onChange={onNameInputChangeHandler} />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" value={statusInput} onChange={onStatusInputChangeHandler} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary" onClick={onSubmitHandler}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(show === 'active' || show === "all") && activeData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                            {(show === 'completed' || show === "all") && completedData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                            {show === 'all' && otherData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;