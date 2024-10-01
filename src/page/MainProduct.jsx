import '../../assets/style/produt.css';
import { Helmet } from "react-helmet";


export default function MainProduct() {
    return (

        <>
            <Helmet>
                <title>Product | Precision Manufacturing Machines: CNC Lathe, VMC, and Contourecord 1600G</title>
                <meta name="description" content="Discover our expertly crafted flanges, gears, and spinners. With a focus on quality and precision, we deliver reliable solutions for all your manufacturing needs." />
            </Helmet>



            <main className="bg-light product-items">
                <div className="container bg-white" style={{ paddingTop: 45 }}>
                    <h1 className="headers">
                        Our <span className="special-style">products</span>
                    </h1>
                    <div className="title-space" />
                    <div className="image-slider container">
                        <div className="image-slider-track">
                            <div className="slide">
                                <img src="./assets/images/Product-images/parts-1.png" />
                            </div>
                            <div className="slide">
                                <img src="./assets/images/Product-images/parts-2.png" />
                            </div>
                            <div className="slide">
                                <img src="./assets/images/Product-images/parts-5.png" />
                            </div>
                            <div className="slide">
                                <img src="./assets/images/Product-images/parts-6.png" />
                            </div>
                            <div className="slide">
                                <img
                                    src="./assets/images/Product-images/Rectangle 18.png"
                                    className="bordering"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src="./assets/images/Product-images/image 8.png"
                                    className="bordering"
                                />
                            </div>
                            <div className="slide">
                                <img src="./assets/images/Product-images/Rectangle 19.png" />
                            </div>
                            <div className="slide">
                                <img src="./assets/images/Product-images/Rectangle 20.png" />
                            </div>
                            <div className="slide">
                                <img src="./assets/images/Product-images/Rectangle 21.png" />
                            </div>
                            <div className="slide">
                                <img
                                    src="./assets/images/Product-images/autoparts-removebg-preview 1.png"
                                    className="bordering"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src="./assets/images/Product-images/autoparts2-removebg-preview 1.png"
                                    className="bordering"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src="./assets/images/Product-images/image 37.png"
                                    className="bordering"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src="./assets/images/Product-images/parts.png"
                                    className="bordering"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src="./assets/images/Product-images/image 35.png"
                                    className="bordering"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src="./assets/images/Product-images/parts-3.png"
                                    className="bordering"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

