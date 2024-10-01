import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"

export default function Header() {

    const location = useLocation();
    const [url, setUrl] = useState(null);


    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);


    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img
                            src="./assets/images/Home page/logo.png"
                            alt=""
                            width={70}
                            height="70px"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={"nav-link " + (url === "/" ? " text-primary" : "")} aria-current="page" to="/" >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link" + (url === "/manufacture" ? " text-primary" : "")} to="manufacture">
                                    Manufacture
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link" + (url === "/product" ? " text-primary" : "")} to="product">
                                    Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link" + (url === "/qualityControl" ? " text-primary" : "")} to="qualityControl">
                                    Quality control
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link" + (url === "/contact" ? " text-primary" : "")} to="contact">
                                    contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

