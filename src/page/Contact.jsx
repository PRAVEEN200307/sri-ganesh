import '../../assets/style/utilities.css'
import '../../assets/style/address.css'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function Contact() {
    return (
        <>
            <main className="container mb-4">
                <div className="address">
                    <div>
                        <Map />
                    </div>
                    <div className="condact-detail">
                        {/* header */}
                        <div>
                            <h4>GET IN TOUCH WITH US</h4>
                            <div>
                                <div className="company-address">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={32}
                                        height={32}
                                        viewBox="0 0 256 256"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M83.19 174.4a8 8 0 0 0 11.21-1.6a52 52 0 0 1 83.2 0a8 8 0 1 0 12.8-9.6a67.88 67.88 0 0 0-27.4-21.69a40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 81.6 163.2a8 8 0 0 0 1.59 11.2M112 112a24 24 0 1 1 24 24a24 24 0 0 1-24-24m96-88H64a16 16 0 0 0-16 16v24H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v24a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H64V40h144Z"
                                        />
                                    </svg>
                                    <p>
                                        2/8 ,MIG ,Rail Nagar-1, velu Nachiyar 2nd Street Maraimalai
                                        Nagar,Chengalpattu distric, tamil nadu - 603 209
                                    </p>
                                </div>
                                <div className="contacts-parent">
                                    <div className="company-contacts">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={32}
                                            height={32}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M2 20V4h12.1q-.1.5-.1 1t.1 1H4l8 5l3.65-2.275q.35.325.763.563t.862.412L12 13L4 8v10h16V9.9q.575-.125 1.075-.35T22 9v11zM4 6v12zm15 2q-1.25 0-2.125-.875T16 5q0-1.25.875-2.125T19 2q1.25 0 2.125.875T22 5q0 1.25-.875 2.125T19 8"
                                            />
                                        </svg>
                                        <p>
                                            <a
                                                href="mailto:sriganeshengg.14@gmail.com"
                                                className="anchor-links"
                                            >
                                                sriganeshengg.14@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                    <div className="company-contacts">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={32}
                                            height={32}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                                            />
                                        </svg>
                                        <p></p>
                                        <p>
                                            <a href="tel:9677131619" className="anchor-links">
                                                96771 31619
                                            </a>
                                        </p>
                                        <p />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>


            </main>
            <ToastContainer />
        </>
    )
}

