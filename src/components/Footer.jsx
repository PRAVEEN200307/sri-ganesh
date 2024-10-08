import { Link } from "react-router-dom"

export default function Footer() {

    
    return (
        <footer>
            <div className="footer">
                <div className="container pt-5">
                    <div className="row ">
                        <ul className="col">
                            <h4>CONTACT US</h4>
                            <li>SRI GANESH ENGINEERING</li>
                            <li>2/8 ,MIG, Rail Nagar-1,</li>
                            <li>Velu Nachiar 2nd Street,</li>
                            <li>Maraimalai Nagar - 603 209,</li>
                            <li>Chengalpattu district</li>
                            <li>Tamil Nadu,India.</li>
                            <li>
                                phone:{" "}
                                <a href="tel:9671131619" className="text-white">
                                    96711 31619
                                </a>
                            </li>
                            <li>
                                E-mail:{" "}
                                <a href="mailto:sriganeshengg.14@gmail.com" className="text-white">
                                    sriganeshengg.14@gmail.com
                                </a>
                            </li>
                        </ul>
                        <ul className="col social-link-titles">
                            <h4>MORE INFO</h4>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="manufacture">Manufacture</Link>
                            </li>
                            <li>
                                <Link to="product">Product</Link>
                            </li>
                            <li>
                                <Link to="qualitycontrol">Quality control</Link>
                            </li>
                        </ul>
                        <ul className="col ">
                            <h4>SOCIAL LINKS</h4>
                            <div className="social-link-items">
                                <li>
                                    <a href="https://wa.me/9677131619" target="_blank">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={32}
                                            height={32}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#fff"
                                                d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/profile.php/?id=100001765929550&name=xhp_nt__fblite__profile__tab_bar"
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={32}
                                            height={32}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#fff"
                                                d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/mohanraj-n-467a24136/"
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={32}
                                            height={32}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#fff"
                                                fillRule="evenodd"
                                                d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803"
                                                clipRule="evenodd"
                                            />
                                        </svg>{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/ns.mohan.14/" target="_blank">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={32}
                                            height={32}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#fff"
                                                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" border">
                <div className="container d-flex justify-content-between p-4 text-secondary ">
                    <h6>Copyrights©2024 All Rights Reserved</h6>
                    <h6>
                        Side developed by:{" "}
                        <a
                            href="www.linkedin.com/in/praveen-kumar-311514297"
                            className="text-secondary"
                            target="_blank"
                        >
                            Praveen Kumar A
                        </a>{" "}
                    </h6>
                </div>
            </div>
        </footer>

    )
}