import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { uid } from 'uid';

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRef } from "react"
import { toast } from 'react-toastify';


const schema = yup
    .object({
        fullName: yup.string().required(),
        Email: yup.string().required(),
        textInput: yup.string().required(),
        phone: yup.number().min(10).required()
    })
    .required()


export default function ContactForm() {

    const form = useRef(0);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        console.log(data);

        await setDoc(doc(db, "contact", uid(16)), {
            data,
        });


        form.current.reset();
        toast.success("Submit successfully");
    }



    return (
        <form className="contact-form" name="emailForm" id="contactForm" ref={form} onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div className="relative">
                <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="userInput"
                    {...register("fullName")}

                />
                <label htmlFor="fullName">Name </label>
                <p className=" small text-danger">{errors.fullName?.message}</p>
            </div>
            {/* email */}
            <div className="relative">
                <input
                    type="email"
                    name="email_id"
                    id="email_id"
                    className="userInput"
                    required=""
                    {...register("Email")}
                />
                <label htmlFor="email_id">Email</label>
                <p className="small text-danger">{errors.Email?.message}</p>
            </div>

            {/* phone */}
            <div className="relative">
                <input
                    type="number"
                    name="phone_id"
                    id="phone_id"
                    className="userInput"
                    required=""
                    {...register("phone")}
                />
                <label htmlFor="phone_id">phone</label>
                <p className="small text-danger">{errors.phone?.message}</p>
            </div>
            {/* message */}
            <div className="relative">
                <textarea
                    name=""
                    id="message"
                    cols={48}
                    rows={10}
                    required=""
                    defaultValue={""}
                    {...register("textInput")}
                />
                <label htmlFor="message">Message</label>
                <p className="small text-danger">{errors.textInput?.message}</p>

            </div>
            <button type="submit" id="sendBtn">
                SEND
            </button>
        </form>
    )
}