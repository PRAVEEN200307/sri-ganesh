import { db } from '../firebase/firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import UpdateModel from './UserAuth';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserAuth from './UserAuth';

export default function Tables() {

    const [data, setData] = useState([]);
    const [userid, setUserId] = useState(0);



    // show the Edit form
    const [Email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [textInput, setTextInput] = useState();


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleFullName = (e) => {
        setFullName(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleTextInput = () => {
        setTextInput(e.target.value)
    }


    // model
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    // get all the data
    async function getData() {
        try {
            const productsRef = collection(db, "contact");
            const res = await getDocs(productsRef);

            const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            // console.log(data)

            setData(data);
        } catch (error) {
            console.log("error: ", error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    // Delect operation
    const handleDelect = async (id) => {
        try {
            if (confirm("Are you sure to delect")) {
                await deleteDoc(doc(db, "contact", id));
                getData()
                toast.warn("You Are Delected Successfully!", {
                    position: "top-center",
                });
                console.log("You Are Delected Successfully!");
            }
        } catch (err) {
            console.log(err);
        }
    }

    // Edit Operation
    async function handleEdit(id) {
        setShow(true)
        setUserId(id);
        const filereddata = data.filter(value => value.id == id);
        const { Email, fullName, phone, textInput } = filereddata[0].data;
        setEmail(Email);
        setFullName(fullName);
        setPhone(phone);
        setTextInput(textInput);
    }


    const handleSubmmit = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData(e.target);
            const formDataObj = Object.fromEntries(formData.entries());
            toast.warn("Update Successfully!", {
                position: "top-center",
            });
            setShow(false);


            const washingtonRef = doc(db, "contact", userid);
            await updateDoc(washingtonRef, {
                "data": formDataObj,
            });

            getData()
        } catch (e) {
            console.log('error', e)
        }
    }

    return (
        <>
            <div className=' p-3 rounded'>
                <Table responsive="sm" borderless hover>
                    <thead >
                        <tr className='bg-primary'>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((userData, index) => {

                                const { fullName, phone, textInput, Email } = userData.data;
                                const { id } = userData;

                                return (
                                    <tr key={index + `list`}>
                                        <td>{index + 1}</td>
                                        <td>{fullName}</td>
                                        <td>{Email}</td>
                                        <td>{phone}</td>
                                        <td>{textInput}</td>
                                        <td className=' text-secondary d-flex  align-items-center ' style={{ gap: '4px' }}>
                                            <div onClick={() => handleEdit(id)}  >
                                                <svg xmlns="http://www.w3.org/2000/svg" className='rounded bg-light ' width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z" /></svg>
                                            </div>


                                            <div onClick={() => handleDelect(id)}>
                                                <svg className='rounded  bg-light m-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M7.616 20q-.672 0-1.144-.472T6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.23 0 .423-.192t.192-.424zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z" /></svg>
                                            </div>

                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </div >

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='fullName' placeholder="Enter Your Name" onChange={handleFullName} value={fullName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='Email' placeholder="name@gmail.com" onChange={handleEmail} value={Email} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" name='phone' placeholder="Enter your phone number" onChange={handlePhone} value={phone} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} name="textInput" onChange={handleTextInput} value={textInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Button type="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>

            </Modal>


            <UserAuth />
        </>

    )
}