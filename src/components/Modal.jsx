import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";



const JSX_MODAL = ({ contacts, parentProps }) => {
    const { allCountryOnclickHandler, usOnclickHandler, closeModal } = parentProps;
    return (
        <div class="" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">

                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-lg btn-outline-primary" type="button" onClick={allCountryOnclickHandler}>All Contacts</button>
                        <button className="btn btn-lg btn-outline-warning" type="button" onClick={usOnclickHandler} >US Contacts</button>
                        <button className="btn btn-lg btn-outline-danger" type="button" onClick={closeModal} >Close</button>
                    </div>

                    <div class="modal-body">
                        <div className="container-sm">
                            <table className="table table-striped ">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.map((d) => {
                                        console.log(d)
                                        return (< tr >
                                            <td>{d.id}</td>
                                            <td>{d.phone}</td>
                                        </tr>)
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div >
                </div>
            </div>
        </div>)
};


function Modal(props) {
    const [contacts, setContacts] = useState([])
    const baseUrl = "https://contact.mediusware.com/api/"
    const allContactPath = "contacts/";
    const countryContactsPath = `country-contacts/${props.country}/`
    useEffect(() => {
        let finalUrl
        if (props.country == "all") {
            finalUrl = baseUrl + allContactPath
        }
        else {
            finalUrl = baseUrl + countryContactsPath
        }
        axios.get(finalUrl)
            .then(response => {
                setContacts(response.data.results)
            })
            .catch(error => {
                console.error(error);
            });


    }, [props.country])

    return ReactDOM.createPortal(<JSX_MODAL parentProps={props} contacts={contacts} />, document.querySelector("#modal"));
}


export default Modal;