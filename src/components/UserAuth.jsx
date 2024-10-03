import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useNavigate} from 'react-router-dom';




export default function UserAuth() {

    const [show, setShow] = useState(true);
    const navigate =useNavigate()


    // const handleClose = () => setShow(false);
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
        const { email, password } = formDataObj;

        if (email == "ganesh@gmail.com" && password == 'ganesh') {
            toast.success("Login Successfully", {
                position: "top-center",
            });
            setShow(false)
        } else {
            toast.warn("Password Incorrect", {
                position: "top-center",
            });
            navigate('/')
        }

    }


    return (
        <Modal show={show} >
            <Modal.Header closeButton>
                <Modal.Title>Login Auth</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" name='email' placeholder="name@example.com" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Button type="submit">Login</Button>
                    </Form.Group>
                </Form>

            </Modal.Body>
        </Modal>
    )
}