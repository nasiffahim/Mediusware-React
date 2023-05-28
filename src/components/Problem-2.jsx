import React, { useState } from 'react';
import Modal from './Modal';

const Problem2 = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [countries, setCountries] = useState("")

    const allCountryOnclickHandler = () => {
        setCountries("all")
        openModal()
    }
    const openModal = () => {
        setModalOpen(true);
    };

    const usOnclickHandler = () => {
        setCountries("United States")
        openModal()
    }

    const closeModal = () => {
        setModalOpen(false);
    };

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" data-toggle="modal" data-target="#exampleModalCenter" onClick={allCountryOnclickHandler}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" data-toggle="modal" data-target="#exampleModalCenter" onClick={usOnclickHandler} >US Contacts</button>
                </div>

            </div>

            <div>
                {isModalOpen && <Modal country={countries}
                    closeModal={closeModal}
                    allCountryOnclickHandler={allCountryOnclickHandler}
                    usOnclickHandler={usOnclickHandler}></Modal>}

            </div>


        </div>
    );
};

export default Problem2;