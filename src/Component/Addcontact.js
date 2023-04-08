import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Create } from '../Action/Contactstate';
// import { Button, FormControl, TextField } from '@mui/material';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Addcontact = () => {

    // const initialvalues = { username: "", email: "", phone:""};
    // const [formvalues,setFormvalues]=useState(initialvalues)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")


    const dispatch = useDispatch()
    const back = useNavigate()


    const contacts = useSelector((state) => state.contact);

    const handlesubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(
            (contact) => contact.email === email && contact
        )
        const checkPhone = contacts.find(
            (contact) => contact.Phone === parseInt(Phone)
        )

        if (!email || !Phone || !name) {
            return toast.warning("please fill in all field !");
        }


        if (checkEmail) {
            return toast.error("This email is already existing")
        }

        if (checkPhone) {
            return toast.error("This Number is already existing")
        }
        if (Phone.length>10||Phone.length<10) {

            return toast.error("phone length number should be 10 digits")
          }


        const data = {
            id: (contacts.length) ? contacts[contacts.length - 1].id + 1 : 0,
            name,
            email,
            Phone,
        }

        dispatch(Create(data));

        toast.success("Student added succesfully !!");


        back('/')


    }


    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{ borderradius: "1rem" }}>
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-5">New Contact</h3>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={name} onChange={(e) => { setName(e.target.value) }}/>
                                    <label for="floatingInput">Name </label>
                            </div>
                           

                            
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
                                    <label for="floatingInput">Email </label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="tel" className="form-control" id="floatingInput" placeholder="Moblie no" value={Phone}  required pattern='\d+' onChange={(e) => { setPhone(e.target.value) }}/>
                                    <label for="floatingInput">Phone no</label>
                            </div>


                           

                            {/* Checkbox  */}

                            <button className="btn btn-primary btn-lg " style={{ backgroundColor: "rgb(176, 91, 179)", width:"10rem",height:"3rem",border:"none"}} type="submit" onClick={handlesubmit}>ADD</button>

                            <hr className="my-4" />

                            <Link to={'/'}><button className="btn btn-lg btn-primary" style={{ backgroundColor: "#dd4b39", width:"10rem",height:"3rem",border:"none" }}
                                type="submit">Cancel</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <></>

    )
}

export default Addcontact